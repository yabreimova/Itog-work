import './portfolio.css';
import photo from '../../gallery/photo.jpg'
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="App">
      <h1>ПОРТФОЛИО</h1>
      <div className="image-container">
        <img alt="" className="photo" src={photo} />
        <div>
        <p>Меня зовут Абреимова Юлия. Я являюсь веб-разработчиком
          с небольшим опытом работы в этой области. Мои навыки включают в себя
          создание и дизайн различных веб-сайтов и интерфейсов. Я специализируюсь
          на разработке фронтенд-части, использую такие языки программирования как
          HTML, CSS и JavaScript. Кроме того, я имею опыт работы с различными
          фреймворками и библиотеками, такими как React и Vue.
          Я стремлюсь создавать пользовательские интерфейсы, которые сочетают в
          себе красивый дизайн и функциональность.</p>
          </div>
      </div>
      <div className="button">
      <h2>Мои проекты</h2>
        <p>1. С помощью Vue.js создала простое приложение для составления списка дел  <Button size="lg">
        <Link to="https://github.com/yabreimova/to-do-list.git">Посмотреть</Link></Button></p>
        <p>2. Разработала прототип сайта с 3 страницами, содержащие форму регистрации и обратной связи <Button size="lg">
        <Link to="https://github.com/yabreimova/figma-design-website.git">Посмотреть</Link></Button></p>
        <p>3. Создала простой калькулятор с использованием HTML, CSS и JavaScript <Button size="lg">
        <Link to="https://github.com/yabreimova/calculator.git">Посмотреть</Link></Button></p>
        <p>4. Создала структуру сайта на основе дизайна Figma, содержащий форму регистрации и обратной связи <Button size="lg">
        <Link to="https://www.figma.com/file/knNAISk8aMaDMD5WGYQNEW/Untitled?type=design&node-id=0-1&mode=design&t=5QCNIG88IQjoLJj4-0">Посмотреть</Link></Button></p>
        <p>5. Создала многостраничный сайт в конструкторе Wordpress  <Button size="lg">
        <Link to="https://u2345489.trial.reg.site/contacts/">Посмотреть</Link></Button></p>
        </div>
      </div>
    );
}

export default Portfolio;