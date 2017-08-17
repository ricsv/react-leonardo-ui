git branch -D gh-pages
git checkout -b gh-pages && \
sed -i '' '/^docs\/dist\/$/d' .gitignore && \
npx rollup -c ./rollup.config.docs.js --environment BUILD:production && \
git add docs/dist && \
git commit -am "Build docs" && \
git push origin :gh-pages && \
git subtree push --prefix docs/dist origin gh-pages
