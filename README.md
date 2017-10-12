# Attacks Dashboard



To run app:    
git clone https://github.com/achieven/attacksDashboard.git     
cd attacksDashboard   

Production mode: (no watching of files):    
If you have forever installed:   
./scripts/deployForever   
If not - either install it: npm i forever -g or:    
./scripts/deployOnce   
open browser at http://localhost:3000 or if you have PORT environment variable then http://localhost:PORT  

dev mode (with watching files):    
./scripts/deployDev

To run tests:    
./scripts/test   

If you already deployed it and just want to run the app:   
npm run startDev
        ![alt text](images/preview.png)


