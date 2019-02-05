export default class ContentSearch {
    constructor(searchInputSelector,
                onChange,
                onFocus,
                onBlur,
                isFocused = false,
    ) {
        this.searchInput = document.querySelector(searchInputSelector);
        if (this.searchInput === null) {
            console.warn(`No search input found by selector ${searchInputSelector}!`);
            return;
        }

        this.inputOnFocus = isFocused;
        this.events = {
            onChange: onChange,
            onFocus: onFocus,
            onBlur: onBlur,
        };

        window.addEventListener("keypress", this.onWindowKeyPress.bind(this));
        
        if (onChange !== null && typeof onChange !== 'undefined') this.searchInput.addEventListener("change", onChange);
        this.searchInput.addEventListener("focus", this.onSearchInputFocus.bind(this));
        this.searchInput.addEventListener("blur", this.onSearchInputBlur.bind(this));

        if (isFocused) this.searchInput.focus();
    }

    onWindowKeyPress(e) {
        if (!this.inputOnFocus) {
            this.searchInput.focus();
        }

        console.log(e);
    }

    onSearchInputFocus(e) {
        this.inputOnFocus = true;
        if (this.events.onFocus !== null && typeof this.events.onFocus !== 'undefined') this.events.onFocus(e);
    }

    onSearchInputBlur(e) {
        this.inputOnFocus = false;
        if (this.events.onBlur !== null && typeof this.events.onBlur !== 'undefined') this.events.onBlur(e);
    }
}