import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

// В першу чергу пропишемо базові вимоги до інтерфейсу та логіки роботи програми:

// Інтерфейс повинен складатися з кількох частин:
//    Шапка з інформацією про завдання та фільтри
//    Форма з полем введення для створення нових завдань
//    Список завдань

// У шапці необхідно відображати:
//    Кількість виконаних та невиконаних завдань
//    Фільтри списку завдань зі значеннями «All», «Active» та «Completed»

// У кожного елементу списку завдань має бути:
//    Абзац з текстом який вводив у форму користувач під час створення завдання
//    Чекбокс перемикання статусу «виконано»
//    Кнопка видалення завдання
