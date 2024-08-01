# Overview
Collection of tools for learning Latvian.

# Architecture
:::mermaid
flowchart

client["Client (react app)"] <--> server["Server (express)"] <--> orm["ORM (sequelize)"] <--> db["Database"]
:::

# Branching strategy
Environment-based branching strategy with 3 long-lived branches, `main`, `test` and `dev` with workflows that deploy to `prod`, `test` and `dev` environments, respectively:
:::mermaid
%%{
    init: {
        'gitGraph': {
            'showCommitLabel': false
        }
    }
}%%
gitGraph TB:

checkout main
commit tag:"bootstrap"

branch test
commit

branch dev
commit

branch feat/ja/feat1
commit id:"F1"

checkout dev
branch feat/ja/feat2
commit

checkout dev
merge feat/ja/feat1 id:"f1" tag:"finished feat1"

checkout feat/ja/feat2
commit id:"F2"

checkout dev
merge feat/ja/feat2 id:"f2" tag:"finished feat2"

checkout test
cherry-pick id:"f2" parent:"F2" tag:"test feat2"

checkout test
cherry-pick id:"f1" parent:"F1" tag:"test feat1"

checkout main
merge test tag:"release feat1 & feat2"
:::

# Database and ORM
ORM using Sequelize. SQLite for local dev environment.

## Sequelize CLI ([docs](https://sequelize.org/docs/v7/cli))
Create a seed file:
```
npx sequelize-cli seed:generate --name my-seed
```
Execute a seed:
```
npx sequelize-cli db:seed:all
```