sed -i '1s/^/import logoImg from ".\/assets\/logo.png";\n/' src/App.tsx
sed -i 's/src="\/assets\/logo\.png"/src={logoImg}/g' src/App.tsx
