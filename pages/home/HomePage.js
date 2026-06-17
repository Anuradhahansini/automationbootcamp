class HomePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.daraz.lk'); // ← ඔයාගේ URL එක දාන්න
    }
}

export default HomePage;