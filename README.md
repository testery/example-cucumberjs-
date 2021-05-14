# example-cucumberjs-supertest
[Cucumber](https://cucumber.io/), [SuperTest](https://www.npmjs.com/package/supertest)

## Package(s)
Packages used are defined in [`/api/package.json`](/bdd/api/package.json).

## Design Pattern(s)
[BDD (Behaviour Driven Development)](https://en.wikipedia.org/wiki/Behavior-driven_development) </br>
[Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface) </br>

## Test Writers - One Time Setup

### Download and Install Packages
1. Download and install the "LTS" version of [NodeJs](https://nodejs.org/en/)
1. Clone this repo
1. Open the [`api`](/api) folder in [VS Code](https://code.visualstudio.com/)
1. Select "Terminal" > "New Terminal"
1. Type or paste in `npm install` and then press [Enter]

### Create a .env file Locally
Note: The `.env` ("dot e-en-ve") will contain user secrets so will be `.gitignored` and never checked in.
1. Open the [`api`](/api) folder in [VS Code](https://code.visualstudio.com/)
1. Right-click in the empty space of the 'Explorer' pane and then select 'New File'
1. Type in `.env` and then press [Enter]
1. Double-click the new file and paste in the following:
   ```
   TEST_API_URL="Request URL: https://the-internet.herokuapp.com"
   VALID_USER="tomsmith"
   VALID_PASS="SuperSecretPassword!"
   ```
   * Note that the above template might be out-of-date, please check with your team lead and peers
1. Make the necessary changes and save the file

### Run All Feature Files
1. (If not already open) Select "Terminal" > "New Terminal"
1. Type or paste in `npm test` and then press [Enter]
   * This is wired up in `package.json > "scripts" > "test"`
