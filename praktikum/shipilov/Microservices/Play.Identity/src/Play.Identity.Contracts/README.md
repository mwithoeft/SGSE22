# Play.Identity.Contracts
Play.Identity.Contracts libraries used by SchüCal Economy services

## Create and publish package
```powershell
$version="1.0.3"
$owner="masterarbeitschueco"
$gh_pat="[PAT HERE]"

dotnet pack src\Play.Identity.Contracts\ --configuration Release -p:PackageVersion=$version -p:RepositoryUrl=https://github.com/$owner/Play.Identity -o ..\packages

dotnet nuget push ..\packages\Play.Identity.Contracts.$version.nupkg --api-key $gh_pat --source "github"
```

## Build the docker image
```powershell
$env:GH_OWNER="masterarbeitschueco"
$env:GH_PAT="[PAT HERE]"

docker build --secret id=GH_OWNER --secret id=GH_PAT -t play.identity:$version .
```