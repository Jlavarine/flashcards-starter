# **📝Flashcard Quiz📝**

This web app allows users to test their developer knowledge by answering 30 flashcard questions with various development terms. Will you be the perfect student and score 100% correct? Or, will you need to repeat a Mod :( ? Test your knowledge!

# **Contributors**

[Jacob Lavarine](https://github.com/Jlavarine)

The above contributor had approximately 6 weeks experience using JavaScript, but this was their first time writing the tests for TDD.

# **Technologies Used**

- JavaScript
- Mocha & Chai


# **Local Install Instructions**
- Fork this repo to create your own copy.
- Clone your newly-forked repo. Make sure SSH is selected.

# **Setup**

Clone down the forked repo (from your GitHub).

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal:

```bash
Your project is running...
```

*Note that you will not need to you run your server until you are instantiating your `Game` class in Iteration 3. Prior to that, you should be using TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*

# **How to View Your Code in Action**

Once you are working through Iteration 3, you will want to start your server to test your functionality.
In the terminal, run:

```bash
node index.js
```

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/ldZ8W8cJuzcPxeiiOf/giphy.gif)
