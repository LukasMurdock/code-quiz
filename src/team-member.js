class TeamMember extends HTMLElement {
	constructor() {
		super();
		const imageSrc = this.getAttribute('src');
		const memberName = this.getAttribute('name');
		const memberTitle = this.getAttribute('title');

		this.innerHTML = `
        <div class="group relative">
          <img src="${imageSrc}" alt="${memberName}" class="aspect-[3/4] w-full object-cover"/>
          <div class="absolute bottom-0 z-10 w-full bg-gray-200 p-4 opacity-90 group-hover:inline-block sm:hidden">
            <h3 class="font-bold">${memberName}</h3>
            <p>${memberTitle}</p>
          </div>
        </div>
      `;
	}
}

customElements.define('team-member', TeamMember);
