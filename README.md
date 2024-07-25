# Overview
Collection of tools for learning Latvian.

# Architecture
:::mermaid
flowchart

client["Client (react app)"] <--> server["Server (express)"] <--> db["Database (mysql)"]
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