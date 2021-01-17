import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import views from './views';

class bookmarkView extends views {
  _parentElement = document.querySelector('.bookmarks');
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _message = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return this._data.map(el => previewView.render(el, false)).join('');
  }
}
export default new bookmarkView();
