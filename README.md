# client-activate-care
[Cucumber](https://cucumber.io/), [SuperTest](https://www.npmjs.com/package/supertest)

## Package(s)
Packages used are defined in [`/api/package.json`](/bdd/api/package.json).

## Design Pattern(s)
[BDD (Behaviour Driven Development)](https://en.wikipedia.org/wiki/Behavior-driven_development) </br>
[Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface) </br>

## Setup
1. Download and install the "LTS" version of [NodeJs](https://nodejs.org/en/)
1. Clone this repo
1. Open the [`api`](/bdd/api) folder in [VS Code](https://code.visualstudio.com/)
1. Select "Terminal" > "New Terminal"
1. Type or paste in `npm install` and then press [Enter]

### Create a .env file
Note: The `.env` ("dot e-en-ve") will contain user secrets so will be `.gitignored` and never checked in.
1. Open the [`api`](/bdd/api) folder in [VS Code](https://code.visualstudio.com/)
1. Right-click in the empty space of the 'Explorer' pane and then select 'New File'
1. Type in `.env` and then press [Enter]
1. Double-click the new file and paste in the following:
   ```
   TEST_API_URL=""
   TEST_USER=""
   TEST_PASS=""
   ```
   * Note that the above template might be out-of-date, please check with your team lead and peers
1. Make the necessary changes and save the file

## Run Tests
1. (If not already open) Select "Terminal" > "New Terminal"
1. Type or paste in `npm test` and then press [Enter]

## Merging into Client repo
1. Create a new branch off of 'main' for the client repo
1. Copy `api` folder from Testery repo to client repo
1. Commit changes
1. Submit PR
