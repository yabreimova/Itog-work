import './gallery.css';
import figma1 from '../../gallery/Figma1.JPG'
import site1 from '../../gallery/Site1.JPG'
import calculate from '../../gallery/Calculate.JPG'
import list from '../../gallery/list.JPG'

const Gallery = () => {
    return (
        <div className="App">
            <h1>Инновации и креативность: история моих значимых проектов в веб-разработке</h1>
            <div className="image-container">
                <figure>
                    <figcaption>Создала структуру сайта на основе дизайна Figma</figcaption>
                    <img alt="" className="title-img-site" src={site1} />
                </figure>
                <figure>
                    <figcaption>Разработала прототип сайта с 3 страницами, содержащие форму регистрации и обратной связи</figcaption>
                    <img alt="" className="title-img-figma" src={figma1} />
                </figure>
                <figure>
                    <figcaption>Создала простой калькулятор с использованием HTML, CSS и JavaScript</figcaption>
                    <img alt="" className="title-img-calculate" src={calculate} />
                </figure>
            </div>
            <div className="image-container2">
                <figure>
                    <figcaption>С помощью Vue.js создала простое приложение для составления списка дел</figcaption>
                    <img alt="" className="title-img-list" src={list} />
                </figure>
            </div>
        </div>
    );
}

export default Gallery;