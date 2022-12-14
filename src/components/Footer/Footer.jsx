import React from "react";
import styles from "./footer.module.css";
import pic1 from "../../public/paypal.png";
import pic2 from "../../public/master.png";
import pic3 from "../../public/visa.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.general1}>
        <div className={styles.header1}>
          <span className={styles.headerTitle1}>
            Биржа фриланса workzilla - бесплатно, быстро и надежно.
          </span>
          <p>
            Workzilla - личный помощник и дружественная среда, чтобы найти
            исполнителя для ваших заданий. Доверяйте выполнение ваших задач
            фрилансерам и занимайтесь приятными делами в это время. Наша
            нейронная сеть найдет подходящего кандидата для любой задачи:
            написать продающий текст, верстка сайта, создать логотип и многие
            другие задания, которые могут выполнить фрилансеры.
          </p>
        </div>
        <div className={styles.header2}>
          <span className={styles.headerTitle2}>
            Как работает биржа фриланса?
          </span>
          <p>
            Найти фрилансера легко. Разместите название и опишите задачу.
            Назначьте цену. Уже через пару минут наша умная нейронная сеть
            подберет несколько десятков исполнителей, этого вам не предложит
            другой сервис. Нейронная сеть прогнозирует результат выполнения для
            каждого конкретного поручения и подберет лучших фрилансеров для
            ваших задач.
          </p>
          <p>
            Прежде чем поручить задание, посетите профиль кандидата и почитайте
            отзывы других заказчиков о его работе. Вы оплачиваете только
            выполненную работу, которой остались довольны. Найдя исполнителя по
            душе, создавайте для него личные задания и работайте на долгосрочной
            основе.
          </p>
          <p>
            На workzilla работают фрилансеры со всего мира. Вы легко найдете
            исполнителя в конкретном городе для решения любых задач: доставка
            курьером, купить цветы, тайный покупатель и многих других.
          </p>
          <p>
            Если хотите найти сотрудника для постоянной удаленной работы,
            разместите объявление о вакансии. Многие фрилансеры готовы перейти
            на постоянную работу, вашу вакансию увидят более 2 миллионов
            пользователей.
          </p>
        </div>
        <div className={styles.header3}>
          <span className={styles.headerTitle3}>
            Почему найти фрилансера на workzilla легко?
          </span>
          <p>
            Заказчикам нравится искать удаленных сотрудников на нашем сервисе.
            Workzilla ценят за выгодные условия и следующие преимущества:
          </p>
          <ul>
            <li>Регистрация без комиссии;</li>

            <li>
              Финансовая надежность на бирже фриланса: оплата работы, которая
              соответствует вашему запросу;
            </li>

            <li>
              Только ответственные исполнители: все фрилансеры проходят
              тестирование и оплачивают вступительный взнос;
            </li>

            <li>
              Наша нейронная сеть непредвзято подбирает лучших кандидатов для
              выполнения конкретных задач с помощью уникального алгоритма;
            </li>

            <li>
              Честная оценка профессионализма кандидата с помощью рейтинга и
              отзывов;
            </li>

            <li>Легкий поиск фрилансеров: более 528 000 исполнителей.</li>
          </ul>
        </div>
      </div>
      <div className={styles.general2}>
        <p>© Intocode 2022</p>
        <div className={styles.payContainer}>
          <img src={pic1} />
          <img src={pic2} />
          <img src={pic3} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
