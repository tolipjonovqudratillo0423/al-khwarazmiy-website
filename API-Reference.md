# Справочник API

Сервер API и маршруты определены в [`server/index.js`](./server/index.js). Данные читаются и записываются через [`server/db.js`](./server/db.js); постоянное хранилище — `server/data.json`. Ответы API обычно имеют поле `success`; списки возвращаются в `data`.

## Аутентификация

Для закрытых запросов передавать JWT в заголовке:

```http
Authorization: Bearer <token>
```

| Метод | Путь | Доступ | Назначение |
|---|---|---|---|
| `POST` | `/api/auth/login` | Публичный | Проверить логин/пароль, вернуть токен и пользователя |
| `GET` | `/api/auth/me` | Требует токен | Проверить текущую сессию |
| `POST` | `/api/auth/change-password` | Требует токен | Сменить пароль |
| `POST` | `/api/upload` | Требует токен | Загрузить изображение; возвращает публичный URL |

Токен хранится клиентом в `localStorage` через [`src/context/AuthContext.jsx`](./src/context/AuthContext.jsx). Не добавлять реальные секреты или значения доступа в этот справочник.

## Публичное чтение и административное редактирование

Следующие `GET`-методы публичны; методы записи/изменения/удаления требуют токен, если не отмечено иначе.

| Ресурс | Публичное чтение | Изменение с токеном |
|---|---|---|
| Сотрудники | `GET /api/teachers` | `POST`, `PUT /api/teachers/:id`, `DELETE /api/teachers/:id` |
| Слайды главной | `GET /api/slides` | `POST`, `PUT /api/slides/:id`, `DELETE /api/slides/:id` |
| Галерея | `GET /api/gallery` | `POST`, `DELETE /api/gallery/:id` |
| События | `GET /api/events` | `POST`, `PUT /api/events/:id`, `DELETE /api/events/:id` |
| Клубы | `GET /api/clubs` | `POST`, `PUT /api/clubs/:id`, `DELETE /api/clubs/:id` |
| Информация о сайте | `GET /api/site-info` | `PUT /api/site-info` |
| Партнёры | `GET /api/partners` | `POST`, `PUT /api/partners/:id`, `DELETE /api/partners/:id` |
| Новости | `GET /api/news`, `GET /api/news/:id` | `POST`, `PUT /api/news/:id`, `DELETE /api/news/:id` |
| Выпуски газеты | `GET /api/gazettes` | `POST`, `DELETE /api/gazettes/:id` |
| Бегущая строка новостей | `GET /api/scroll-news` | `POST`, `PUT /api/scroll-news/:id`, `DELETE /api/scroll-news/:id` |
| Статистика | `GET /api/stats` | `PUT /api/stats` |

Запрос списка новостей принимает необязательные параметры `category`, `search`, `featured=true` и `limit`. Запрос отдельной новости увеличивает её счётчик просмотров.

Для создания и редактирования партнёра нужны `name` и `logo`; `tag` — необязательная подпись. Логотип можно загрузить через `/api/upload`, затем сохранить возвращённый URL в поле `logo`.

## Обращения с сайта

| Метод | Путь | Доступ | Назначение |
|---|---|---|---|
| `POST` | `/api/contact` | Публичный | Сохранить сообщение из формы обратной связи |
| `GET` | `/api/messages` | Требует токен | Получить обращения для админ-панели |
| `PUT` | `/api/messages/:id/read` | Требует токен | Пометить обращение прочитанным |
| `DELETE` | `/api/messages/:id` | Требует токен | Удалить обращение |

## При изменении API

1. Сверить маршрут и формат записи в `server/index.js` и `server/db.js`.
2. Проверить все вызовы `/api/...` в `src/`, особенно страницу или компонент, который должен показывать ответ.
3. Для административных операций сохранить заголовок `Authorization`.
4. Не менять структуру данных без учёта уже сохранённого `server/data.json` и резервной копии.
5. Не считать метод защищённым только потому, что его вызывает админ-панель: проверять `authMiddleware` на стороне сервера.

Инструкции запуска — в [`Development-Guide.md`](./Development-Guide.md).
