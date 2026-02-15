@echo off
echo Building project...
call npm run build
if %errorlevel% neq 0 exit /b %errorlevel%

echo Cleaning up previous git...
if exist dist\.git rmdir /s /q dist\.git

echo Navigating to dist...
cd dist

echo Initializing git...
git init
git checkout -b gh-pages
git add -A
git commit -m "new user deploy"

echo Pushing to GitHub...
git push -f https://github.com/KSC-tvs/KSC.git gh-pages

echo Done! Open: https://KSC-tvs.github.io/KSC/
cd ..
