
## Backend

### Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/30) file in the `backend` directory with the following content:
    ```properties
    API_USERNAME=your_api_username
    API_PASSWORD=your_api_password
    DB_NAME=ecommerce
    DB_USER=postgres
    DB_PASSWORD=root
    DB_HOST=localhost
    DB_DIALECT=postgres
    DATABASE_URL=postgres://root:root@localhost:5432/ecommerce
    ```

4. Start the backend server:
    ```sh
    npm run dev
    ```

### Endpoints

- `POST /api/categories`: Create a new category
- `GET /api/categories`: Get all categories
- `PUT /api/categories/:id`: Update a category
- `DELETE /api/categories/:id`: Delete a category

- `POST /api/products`: Create a new product
- `GET /api/products`: Get all products
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Frontend

### Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/31) file in the `frontend` directory with the following content:
    ```properties
    REACT_APP_API_USERNAME=your_api_username
    REACT_APP_API_PASSWORD=your_api_password
    ```

4. Start the frontend development server:
    ```sh
    npm start
    ```

### Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- [npm test](http://_vscodecontentref_/32): Launches the test runner in interactive watch mode.
- `npm run eject`: Ejects the app from Create React App configuration.

## License

This project is licensed under the MIT License.
