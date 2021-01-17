import icons from 'url:../../img/icons.svg';
import views from './views';

class paginationView extends views {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup = function () {
    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (this._data.page === 1 && numOfPages > 1) {
      return `<button data-goto="${
        this._data.page + 1
      }" class="btn--inline  pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    if (this._data.page === numOfPages && numOfPages > 1) {
      return `<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>`;
    }
    if (this._data.page < numOfPages) {
      return `<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>
          <button data-goto="${
            this._data.page + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    return '';
  };
  addHandler = function (handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const goToPage = +btn.dataset.goto;
      if (!btn) return;
      handler(goToPage);
    });
  };
}
export default new paginationView();
