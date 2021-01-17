import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import views from './views';

class ResultsView extends views {
  _parentElement = document.querySelector('.results');
  _errorMessage = `We couldn't find recepies that match that query, please try again`;
  _message = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return this._data.map(el => previewView.render(el, false)).join('');
  }
}
export default new ResultsView();
