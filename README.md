
# Setup and Installation
1. You must have Postgres setup in your computer
2. Add the database TestDB to your Postgres user
3. Add the table Items using the below sql command:
    ```
    CREATE TABLE Items(
        id SERIAL,
        name varchar(100)
    );
    ```
4. Add some test items to this table. You can add an item using the below command:
    ```
   INSERT INTO Items(name) VALUES ('Mohammad Abdelnaby');
    ```
5. Now, we need to configure the correct postgres user. To do this, 
   in this folder structure, go to src/main/resources/application.properties
   , and change the default values as per yours. You may also want to add password
   if your user has a password. To do this, add the following line to the properties file:
   ```
   spring.datasource.password=USER_PASSWORD
   ```

6. Now, you can run the application from the file src/main/java/com.moabdelnaby.internapi/InternapiApplication
7. You can test the API by trying GET requests to:
   - Get All items
   ```
   localhost:8080/items
   ```
   - Get specific item by id:
   ```
   localhost:8080/items?id=ITEM_ID
   ```
