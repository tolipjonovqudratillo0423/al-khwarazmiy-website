# Структура проекта

Проект — сайт школы на JavaScript: React-приложение с клиентской маршрутизацией и Express-сервером. Основные точки входа: [`src/main.jsx`](./src/main.jsx), [`src/App.jsx`](./src/App.jsx), [`server/index.js`](./server/index.js).

## Каталоги и важные файлы

| Путь | Назначение |
|---|---|
| `src/main.jsx` | Подключает React, React Router, контексты языка и входа администратора. |
| `src/App.jsx` | Определяет маршруты сайта, общую шапку/подвал и прокрутку страниц наверх. |
| `src/pages/` | Компоненты страниц: главная, приём, обучение, новости, контакты, админ-панель и другие. |
| `src/components/` | Общие части интерфейса и секции главной страницы: навигация, новости, статистика, анимации и т. п. |
| `src/context/` | Контексты состояния аутентификации и языка. Интерфейс сейчас работает на узбекском языке. |
| `src/index.css` | Базовые стили и CSS-анимации; основная система классов — Tailwind. |
| `server/index.js` | Express-приложение, API-маршруты, раздача собранного сайта и загруженных изображений. |
| `server/db.js` | Чтение и запись JSON-хранилища и операции над записями. Несмотря на имя файла, это не подключение к SQL-БД. |
| `server/auth.js` | Создание и проверка JWT, middleware для закрытых API-маршрутов. |
| `server/data.json` | Текущее постоянное хранилище записей сайта и административных данных. Считать чувствительным; не включать в промпты и публикации. |
| `public/assets/` | Статические изображения; сервер также сохраняет сюда загруженные администратором изображения. |
| `index.html` | HTML-шаблон приложения, метаданные, шрифты и точка монтирования React. |
| `package.json` | Зависимости и команды запуска/сборки. |
| `vite.config.mjs` | Vite и прокси `/api` на локальный Express-сервер. |
| `tailwind.config.cjs` | Цвета бренда и шрифт Poppins для Tailwind. |
| `Dockerfile`, `docker-compose.yml` | Контейнерные конфигурации; их совместимость с текущим приложением пока не подтверждена. |

`dist/` создаётся production-сборкой; `node_modules/` содержит установленные зависимости. Это не исходники для редактирования вручную.

## Маршруты сайта

### Подключённые страницы

| URL | Компонент |
|---|---|
| `/` | `HomePage` |
| `/maqsad-vazifalar` | `MissionPage` |
| `/rahbariyat` | `LeadershipPage` |
| `/prezidentlik` | `PresidencyPage` |
| `/fan-yonalishlari` | `DirectionsPage` |
| `/web`, `/mobil`, `/grafika`, `/tarmoq` | Страницы IT-направлений |
| `/oquv-dasturlari` | `CurriculumPage` |
| `/yotoqxona` | `DormitoryPage` |
| `/oquvchilar-tashkilotlari` | `StudentOrganizationsPage` |
| `/qabul-tartibi` | `AdmissionsPage` |
| `/yangiliklar` | `NewsListPage` |
| `/yangiliklar/:id` | `NewsDetailPage` |
| `/kontaktlar` | `ContactPage` |
| `/admin-login`, `/admin` | Вход администратора и панель |
| Любой другой URL | `NotFoundPage` |

### Перенаправления

- `/about`, `/history`, `/documents`, `/fotogalereya` → `/maqsad-vazifalar`.
- `/olympics` → `/fan-yonalishlari`.
- `/maktab-tadbirlari` → `/`.

В `src/pages/` есть `GalleryPage.jsx` и `EventsPage.jsx`, но текущие правила в `src/App.jsx` их не подключают. Перед работой над этими разделами сначала уточнить ожидаемое поведение.

## Главная страница

[`src/pages/HomePage.jsx`](./src/pages/HomePage.jsx) собирает блоки в таком порядке: слайдер, информация о школе и статистика, направления, новости/газета, условия обучения, клубы, часто задаваемые вопросы и партнёры. Большинство визуальных блоков реализовано отдельными компонентами в `src/components/`.

Подробнее о запуске и разделении клиента/сервера — в [`Development-Guide.md`](./Development-Guide.md); об API — в [`API-Reference.md`](./API-Reference.md).
