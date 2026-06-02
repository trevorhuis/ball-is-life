# Issue tracker: Jira

Issues and PRDs for this repo live as Jira issues. Use Jira's REST API for all operations.

## Configuration

Set these environment variables before interacting with Jira:

- `JIRA_BASE_URL` — e.g. `https://your-domain.atlassian.net`
- `JIRA_EMAIL` — the Jira account email to authenticate as
- `JIRA_API_TOKEN` — a Jira API token for that account
- `JIRA_PROJECT_KEY` — the Jira project key for this repo

Use Basic auth with the email and API token:

```bash
-u "$JIRA_EMAIL:$JIRA_API_TOKEN"
```

Prefer Jira Cloud REST API v3 endpoints under:

```text
$JIRA_BASE_URL/rest/api/3
```

## Conventions

- **Create an issue**: `POST /rest/api/3/issue`. Include `fields.project.key`, `fields.summary`, `fields.description`, and `fields.issuetype.name`. Use `Task` unless a skill explicitly calls for another issue type.
- **Read an issue**: `GET /rest/api/3/issue/<key>?expand=renderedFields,names,schema` and fetch comments with `GET /rest/api/3/issue/<key>/comment`.
- **List issues**: `GET /rest/api/3/search/jql` with a JQL query such as `project = "$JIRA_PROJECT_KEY" AND statusCategory != Done ORDER BY created DESC`. Include fields such as `summary,status,labels,description,comment`.
- **Comment on an issue**: `POST /rest/api/3/issue/<key>/comment`.
- **Apply / remove labels**: `PUT /rest/api/3/issue/<key>` with `fields.labels` set to the complete desired label list. Read the issue first so you do not accidentally drop existing labels.
- **Close**: transition the issue with `POST /rest/api/3/issue/<key>/transitions`. First run `GET /rest/api/3/issue/<key>/transitions` to find the appropriate done/closed transition id. Add a closing comment separately if needed.

Use `curl` and `jq` for REST API calls. For multi-line descriptions or comments, build JSON with `jq -n` rather than hand-escaping strings.

Example create call:

```bash
curl -sS \
  -u "$JIRA_EMAIL:$JIRA_API_TOKEN" \
  -H "Content-Type: application/json" \
  -X POST \
  --data "$(jq -n \
    --arg project "$JIRA_PROJECT_KEY" \
    --arg summary "Issue title" \
    --arg body "Issue body" \
    '{fields:{project:{key:$project},summary:$summary,description:{type:"doc",version:1,content:[{type:"paragraph",content:[{type:"text",text:$body}]}]},issuetype:{name:"Task"}}}')" \
  "$JIRA_BASE_URL/rest/api/3/issue"
```

## When a skill says "publish to the issue tracker"

Create a Jira issue in `JIRA_PROJECT_KEY`.

## When a skill says "fetch the relevant ticket"

Fetch the Jira issue by key, including comments. For example, fetch `ABC-123` with `GET /rest/api/3/issue/ABC-123` and `GET /rest/api/3/issue/ABC-123/comment`.
