# **Roblox Server Regions - UserScript**

## **Overview**  
This userscript retrieves the server details of a specified number of servers for your selected Roblox game, identifies their locations, and allows you to organize them by region to optimize your ping. It offers a free, open-source alternative to paid Roblox extensions like RoPro, RoGold, and RoQoL..

---

## **Features**  

### **1. Server Location Fetching**  
- Retrieves server locations using their IP addresses.  
- Displays detailed information, including **city**, **country**, and **region** (if available).  

### **2. Enhanced Server List**  
- Rebuilds the server list to include metrics like **ping** and **FPS**.  
- Implements a color-coded ping system:  
  - 🟢 **Green**: Best ping  
  - 🟠 **Orange**: Average ping  
  - 🔴 **Red**: Worst ping  

### **3. Advanced Filtering**  
- Adds dropdown menus for filtering servers by **country** and **city**.  
- Automatically selects a city if only one city exists for the chosen country.  

### **4. Invite Link Feature**  
- Each server card features an **"Invite"** button.  
- Clicking the button copies the server’s invite link directly to your clipboard.  

### **5. Auto-Run Functionality**  
- Automatically filters servers upon page load when enabled.  
- Includes a convenient toggle to turn the auto-run feature on or off.  

---

## **Installation**  

### Prerequisites  
1. Install a userscript manager extension for your browser:  
   - [Tampermonkey](https://www.tampermonkey.net/)  
   - [Greasemonkey](https://www.greasespot.net/)  
   - [Violentmonkey](https://violentmonkey.github.io/)

### Steps  
1. Open your userscript manager and create a new script.  
2. Pastethe script code into the editor or click install on this page.  
3. Save and enable the userscript.  

---

## **Usage**  

1. Go to any Roblox game page (e.g., [Phantom Forces](https://www.roblox.com/games/292439477/Christmas-Update-Phantom-Forces)).  
2. Click the **"Filter Server Region"** button to start the filtering process. 
3. Select the **amount** of servers you want to search for.
4. Use the dropdown menus to refine your server selection by **country** and **city**.  
5. Copy invite links by clicking the **"Invite"** button on any server card.  

---

## **Auto-Run Feature**  

- The auto-run feature simplifies server filtering by activating automatically when a game page loads.  
- Enable or disable it using the toggle next to the **"Filter Server Region"** button.  

---

## **Technical Details**  

- **Script Name**: Roblox Server Regions  
- **Version**: 8.0  
- **Author**: Oqarshi  
- **Applicable URLs**: `https://www.roblox.com/games/*`  
- **Grant Permission**: `GM_xmlhttpRequest`  

---

## **Supported Extensions**  
This userscript is compatible with the following verified Roblox extensions:  
- RoGold  
- RoPro  
- RoQOL  
- RoBox  
- RoSeal  

---

## **Credits**  

- **Referenced Code**: Special thanks to the **BTRoblox Team** for their valuable open-source extension, available on [GitHub](https://github.com/AntiBoomz/BTRoblox). ❤️    
- **Live Server Updates**: Data sourced from [BGP.he.net - AS22697](https://bgp.he.net/AS22697#_prefixes).  
- **Location Identification Method**: Based on a guide by **Duduble**, available on the [Roblox Developer Forum](https://devforum.roblox.com/t/how-to-find-the-server-region-from-the-website/2862705/5).  
- **Additional Insights**: Thanks to **TheShowCaseMaker** for their comprehensive list of server IPs and ranges, found on the [Roblox Developer Forum](https://devforum.roblox.com/t/all-roblox-server-ips-and-ranges/1802411).  
- **Code Inspiration**: Shoutout to **IsDatYoMama10** also known as **Exilon24** for his project, [RobloxServerFinder](https://github.com/Exilon24/RobloxServerFinder).  
- **Author**: Developed by **Oqarshi**.
