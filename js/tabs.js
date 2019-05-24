class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab;
      if(this.tabData === "all"){
        this.teamItems = document.querySelectorAll(".team-item");
      } else {
        this.teamItems = document.querySelectorAll(`.team-item[data-tab='${this.tabData}']`);
      } 
      this.teamItems = Array.from(this.teamItems).map(teamItem => new TabCard(teamItem));
      this.tabElement.addEventListener('click', () => {
        this.selectTab();
      })
    }
  
    selectTab(){
      // Select all elements with the .tab class on them
      const tabs = document.querySelectorAll(".tab");
      
      tabs.forEach(tab => {
        tab.classList.remove("active-tab");
      })

      const teamItems = document.querySelectorAll(".team-item");
      teamItems.forEach(teamItem => {
        teamItem.style.display = "none";
      })
  
      this.tabElement.classList.add("active-tab");
      this.teamItems.forEach(teamItem => {
        teamItem.selectCard();
      })
    }
  }
  
  class TabCard {
    constructor(itemElement){
      this.itemElement = itemElement;
    }
    selectCard(){
      this.itemElement.style.display = "flex";
    }
  
  }
  
  let tabs = document.querySelectorAll(".tab").forEach( tab => new TabLink(tab));