import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Cambio de `styleUrl` a `styleUrls`
})
export class SidebarComponent implements AfterViewInit {

  // Implementa el método ngAfterViewInit que es llamado después de que la vista ha sido inicializada
  ngAfterViewInit(): void {
    const menuToggle = document.querySelector('.logo') as HTMLElement;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const MenuList: NodeListOf<HTMLLIElement> = document.querySelectorAll<HTMLLIElement>('.menulist li');

    function activeLink(this: HTMLLIElement) {
        MenuList.forEach((item: HTMLLIElement) =>
            item.classList.remove('active')
        );
        this.classList.add('active');
    }

    MenuList.forEach((item: HTMLLIElement) =>
        item.addEventListener('click', activeLink)
    );

    if (menuToggle && sidebar) {
      // Añade un evento de click al elemento menuToggle
      menuToggle.onclick = () => {
        // Alterna la clase 'active' en ambos elementos
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
      };
    } else {
      console.error('menuToggle or sidebar element not found.');
    }
  }
  
}
