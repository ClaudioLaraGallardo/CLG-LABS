sed -i 's/import logoImg from '\''\.\/assets\/logo\.png'\'';//g' src/App.tsx
sed -i 's/src={logoImg}/src="\/assets\/logo\.png"/g' src/App.tsx
