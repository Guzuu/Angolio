import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ImgtextComponent } from '../../sections/imgtext/imgtext.component';
import { TranslateModule } from '@ngx-translate/core';

interface Person {
  id: number;
  mother_id: number;
  father_id: number;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  date_of_death: string;
  children?: Person[];
  mother?: Person;
  father?: Person;
  spouse?: Person;
  processed?: boolean;
  geneLineId?: number;
  familyLineClass?: string;
}

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css'],
  standalone: true,
  imports: [CommonModule, ImgtextComponent, TranslateModule]
})
export class FamilyTreeComponent implements OnInit {
  people: Person[] = [];
  treeRoots: Person[] = [];

  private isDragging = false;
  private startX: number = 0;
  private scrollLeft: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/family.csv', { responseType: 'text' })
      .subscribe(csv => {
        this.people = this.parseCSV(csv);
        this.treeRoots = this.buildTree(this.people);
      });
  }

  parseCSV(csv: string): Person[] {
    const lines = csv.trim().split('\n');
    const header = lines[0].split(';');
    return lines.slice(1).map(line => {
      const cols = line.split(';');
      const obj: any = {};
      header.forEach((key, idx) => {
        obj[key] = cols[idx];
      });
      return {
        id: +obj.id,
        mother_id: +obj.mother_id,
        father_id: +obj.father_id,
        first_name: obj.first_name,
        last_name: obj.last_name,
        gender: obj.gender,
        date_of_birth: obj.date_of_birth,
        date_of_death: obj.date_of_death,
        children: []
      };
    });
  }

  private getColorFromName(lastName: string): { color: string, background: string } {
    // Get first two letters and calculate their ASCII values
    const chars = lastName.substring(0, 2).toUpperCase();
    const ascii1 = chars.charCodeAt(0);
    const ascii2 = chars.charCodeAt(1) || ascii1;

    // Generate RGB values
    const r = Math.round((ascii1 * 37) % 200 + 55); // 55-255 range
    const g = Math.round((ascii2 * 41) % 200 + 55);
    const b = Math.round(((ascii1 + ascii2) * 43) % 200 + 55);

    // Create main color and lighter background
    const color = `rgb(${r}, ${g}, ${b})`;
    const background = `rgba(${r}, ${g}, ${b}, 0.3)`;

    return { color, background };
  }

  buildTree(people: Person[]): Person[] {
    const map = new Map<number, Person>();
    people.forEach(p => map.set(p.id, p));
    
    // Create family lines by last name with dynamic colors
    const familyNames = new Set(people.map(p => p.last_name));
    const familyColors = new Map<string, { color: string, background: string }>();
    
    familyNames.forEach(lastName => {
      familyColors.set(lastName, this.getColorFromName(lastName));
      const familyClass = `family-${lastName.toLowerCase()}`;
      const style = document.createElement('style');
      const { color, background } = familyColors.get(lastName)!;
      
      style.textContent = `
        .${familyClass} .person-card[data-lastname="${lastName}"], .person-card[data-lastname="${lastName}"] { 
          border-color: ${color}; 
          box-shadow: inset 0 0 0 50px ${background}; 
        }
        .${familyClass} li::before, 
        .${familyClass} li::after,
        .${familyClass} ul::before { 
          border-color: ${color} !important; 
        }
      `;
      document.head.appendChild(style);

      people
        .filter(p => p.last_name === lastName)
        .forEach(p => p.familyLineClass = familyClass);
    });

    // Reset all flags and collections
    people.forEach(p => {
      p.processed = false;
      p.children = [];
      p.spouse = undefined;
    });

    // First pass: Build all parent-child relationships
    people.forEach(person => {
      if (person.mother_id > 0) {
        const mother = map.get(person.mother_id);
        if (mother) {
          mother.children = mother.children || [];
          mother.children.push(person);
          person.mother = mother;
        }
      }
      if (person.father_id > 0) {
        const father = map.get(person.father_id);
        if (father) {
          father.children = father.children || [];
          father.children.push(person);
          person.father = father;
        }
      }
    });

    // Second pass: Link spouses and mark processed
    people.forEach(person => {
      if (person.mother && person.father && !person.mother.spouse) {
        person.mother.spouse = person.father;
        person.father.spouse = person.mother;
        person.father.processed = true;
      }
    });

    // Sort children by birth year
    people.forEach(person => {
      if (person.children?.length) {
        person.children.sort((a, b) => {
          const yearA = Number(a.date_of_birth.split('-')[0]) || 0;
          const yearB = Number(b.date_of_birth.split('-')[0]) || 0;
          return yearA - yearB;
        });
      }
    });

    // Find root nodes
    const rootIds = [1, 101]; // Franciszek Guz and Jan Guz
    const roots = rootIds
      .map(id => map.get(id))
      .filter(p => p !== undefined) as Person[];

    return roots;
  }

  getGeneClass(person: Person): string {
    return person.geneLineId !== undefined ? `gene-line-${person.geneLineId % 10}` : '';
  }

  getFamilyClass(person: Person): string {
    return person.familyLineClass || '';
  }

  onMouseDown(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    this.isDragging = true;
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const container = event.currentTarget as HTMLElement;
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
    (event.currentTarget as HTMLElement).style.cursor = 'grab';
  }

  onMouseLeave(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
      (event.currentTarget as HTMLElement).style.cursor = 'grab';
    }
  }
}
