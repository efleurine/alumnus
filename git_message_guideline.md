# Git Message guidelines

>Disclaimer: Please read for more insigth [Chris Beams' blog article](https://chris.beams.io/posts/git-commit/)

## The seven rules of a great Git commit message


1. Separate subject from body with a blank line
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the imperative mood in the subject line
1. Wrap the body at 72 characters
1. Use the body to explain what and why vs. how


### See a living exemple below
`START OF GIT COMMIT EXEMPLE`

Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789

`END OF GIT COMMIT EXEMPLE`

## How to write a great `git commit subject`
**_A properly formed Git commit subject line should always be able to complete the following sentence:_**

>If applied, this commit will your subject line here

For example:

* If applied, this commit will **refactor** subsystem X for readability
* If applied, this commit will **update** getting started documentation
* If applied, this commit will **remove** deprecated methods
* If applied, this commit will **release** version 1.0.0
* If applied, this commit will **merge** pull request #123 from user/branch


Now notice how this doesn’t work for the other non-imperative forms:


* If applied, this commit will **fixed** bug with Y
* If applied, this commit will **changing** behavior of X
* If applied, this commit will **more** fixes for broken stuff
* If applied, this commit will **sweet** new API methods



### For us Let's agree on this short list of leading active verbs:

* Add = Create a capability e.g. feature, test, dependency.

* Cut = Remove a capability e.g. feature, test, dependency.

* Fix = Fix an issue e.g. bug, typo, accident, misstatement.

* Bump = Increase the version of something e.g. dependency.

* Make = Change the build process, or tooling, or infra.

* Start = Begin doing something; e.g. create a feature flag.

* Stop = End doing something; e.g. remove a feature flag.

* Refactor = A code change that MUST be just a refactoring.

* Reformat = Refactor of formatting, e.g. omit whitespace.

* Optimize = Refactor of performance, e.g. speed up code.

* Document = Refactor of documentation, e.g. help files.


### Other very useful resources
* [The case for atomic commits](https://www.freshconsulting.com/atomic-commits/)
* [Git Workflow](https://sandofsky.com/blog/git-workflow.html)

#### Todo
1. Add and configure husky (or other tool) to enforce git message and prevent bad commit