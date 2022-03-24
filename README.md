# **Flashcard Quiz**

This web app allows users to test your developer knowledge by answering 30 flashcard questions with various development terms. Will you be the perfect student and score 100% correct or will you need to repeat a Mod :( Test your luck! The following contributors had approximately 6 weeks experience using JavaScript, but this is my first time writing the tests for TDD.

# **Contributors**

[Jacob Lavarine](https://github.com/Jlavarine)

# **Technologies Used**

- JavaScript


# **Local Install Instructions**
- Fork this repo to create your own copy.
- Clone your newly-forked repo. Make sure SSH is selected.

# **Setup**

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

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
