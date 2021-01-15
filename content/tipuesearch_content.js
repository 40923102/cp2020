var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 這個倉儲位於\xa0 https://github.com/mdecourse/cmstemplate \xa0是一個能夠與 Github Pages, Gitlab Pages 以及 Heroku 結合的網際內容管理系統. \n', 'tags': '', 'url': 'About.html'}, {'title': 'Hint', 'text': '\n 是否了解如何設定 Github Pages? \n 是否了解如何設定 Gitlab Pages? \n 是否了解如何設定 Heroku? \n \n 作業一的目的: \n \n 閱讀與電腦軟硬體相關的英文資料, 藉以了解英文相關術語 \n 了解電腦與網路相關設定 \n 了解如何使用 Git, Github 與 CMSiMDE \n \n 作業二的目的: \n \n 實際了解 Python 程式在課程推動上的應用 \n 了解如何從網站超文件資料中擷取所要的資料 \n 使用 Kaggle 與近端 SciTE 開發 Python 程式 \n \n 作業三的目的: \n \n 著手利用 Python 解決各類問題 \n 利用 Python 修改 Solidworks 與 Inventor 零件尺寸 \n \n', 'tags': '', 'url': 'Hint.html'}, {'title': 'gitlab-ci.yml', 'text': '標題不能使用 .gitlab-ci.yml 因為轉為 content/.gitlab-ci.yml 時, 無法從 content/.github-ci.yml 呼叫. \n .gitlab-ci.yml 是在 Gitlab Pages 設定過程中將靜態網頁轉存並伺服的 continuout integration 設定檔案. \n pages:\n  stage: deploy\n  script:\n  - mkdir .public\n  - cp -r * .public\n  - mv .public public\n  artifacts:\n    paths:\n    - public\n  only:\n  - master\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive \n', 'tags': '', 'url': 'gitlab-ci.yml.html'}, {'title': 'CMSiMDE', 'text': '網際內容管理系統 \n Web-based Content Management System \n https://learnmech.com/ \n https://www.instructables.com/ \xa0\xa0 \n https://imechanica.org/ \xa0 \n https://info.traceparts.com/use-and-manage-3d-cad-models/download-free-cad-models/ \xa0 \n https://bookboon.com/en \xa0 \n \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'CMSiMDE 程式架構', 'text': '動態網頁的主要檔案為 config/content.htm \n 當使用者在命令列中將目錄更換到 cmsimde, 然後以 python wsgi.py 執行 wsgi.py 程式時, 其實 Python 程式是仰賴 Flask 網際框架結構來進行資料伺服. \n CMSiMDE 的作動需要 Flask 網際框架, 需要 bs4 與 lxml 進行 content.htm 的頁面解讀, 透過超文件檔案中的 h1, h2 與 h3 由上到下執行循序式分頁, 之後再透過 Javascript 與 css 將 h1, h2, h3 依照樹狀結構, h1 標題為第一階, h2 為第二階, h3 為第三階. \n', 'tags': '', 'url': 'CMSiMDE 程式架構.html'}, {'title': '為何需要網際內容管理', 'text': '全球資訊網無遠弗屆, 而且 WWW 的伺服架構相對於手機 APP 對於使用者而言更加友善, 除了允許多重身分無需實名綁定之外, 可以讓工程師進行各種協同設計, 因此若能廣泛利用網際環境建立各種應用程式環境, 將有助提升設計效益. \n', 'tags': '', 'url': '為何需要網際內容管理.html'}, {'title': '如何建立 CMSiMDE 子模組', 'text': 'git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 表示要透過 git submodule add 將  https://github.com/mdecourse/cmsimde.git \xa0遠端倉儲當作子模組, 而且將資料存入子目錄 cmsimde 中. \n', 'tags': '', 'url': '如何建立 CMSiMDE 子模組.html'}, {'title': '為何需要以子模組的設計', 'text': '在一個倉儲中帶有子模組的用意是善用分散式設計的做法, 子模組代表一個非由倉儲管理者維護權限所及的單位模組. 意即, 倉儲中程式的執行需要子模組中的資料, 但是倉儲擁有者將子模組視為獨立元件, 並不需要對子模組的內容進行改版. 一旦子模組原始倉儲資料更新, 採用子模組的各倉儲所有者可以決定是否配合跟進, 若不跟進仍有使用既有版本的子模組繼續運作, 原始子模組與採用不同版本子模組的倉儲都不會彼此受到影響. \n', 'tags': '', 'url': '為何需要以子模組的設計.html'}, {'title': '兩種不同的 git clone', 'text': 'git clone  https://github.com/mdecourse/cmsimde.git \n 表示要將 cmsimde 倉儲的資料 clone 到近端, 針對沒有子模組設置的倉儲可以直接以 git clone 取下倉儲資料 \n git clone --recurse-submodules  https://github.com/mdecourse/cp2020.git \n 表示要將 cp2020 倉儲中包含個子模組與可能子模組中的子模組等資料, 全部 clone 到近端. \n', 'tags': '', 'url': '兩種不同的 git clone.html'}, {'title': '假如 CMSiMDE 不設為子模組', 'text': '其實各用戶若希望自行維護 CMSiMDE 網際內容管理系統, 可以直接取下 CMSiMDE 程式資料, 然後將倉儲資料放在 cmsimde 子目錄中, 並將 up_dir 中的資料複製一份到倉儲根目錄, 如此就可以依 CMSiMDE 的用法使用動態與靜態網頁. \n', 'tags': '', 'url': '假如 CMSiMDE 不設為子模組.html'}, {'title': '為何需要有動態網頁與靜態網頁', 'text': '所謂的動態網頁指的是有登入系統配置的網際內容管理系統, 當使用者登入後進行內容管理, 網站會馬上呈現新版本內容, 通常無需進行網頁轉換. \n 所謂的靜態網頁則指網站通常沒有登入系統的配置, 而且通常只包含 html 與 Javascript 資料, 由於沒有登入系統, 因此沒有內容被駭的問題, 除非負責伺服超文件網頁的系統遭駭. \n 而 CMSiMDE 的動態網頁用於編輯網站內容, 而靜態網頁則可以利用 Github Pages, Gitlab Pages 與 Heroku 進行伺服. \n', 'tags': '', 'url': '為何需要有動態網頁與靜態網頁.html'}, {'title': 'CMSiMDE 有甚麼使用上的限制嗎比方說能夠使用那些特殊符號, 為什麼不能使用分號, 以及所謂的標題有沒有最多幾個字元的限制, 另外就是假如標題過長, 會發生甚麼狀況與後果', 'text': '假如在上列頁面標題中加上兩個 "?", 上面這個標題就無法順利分頁, 但是利用 SciTE 編輯 config/content.htm 之後將兩個 "?" 刪除後則可以正確完成分頁. \n 上面的標題字元數超過 80 個, 雖可正常分頁但是在資料展示上就顯得不很方便. \n CMSiMDE 標題不能使用 ":" 的原因在於 Windows 操作系統不允許檔案名稱中有 ":", 因此當 CMSiMDE 動態轉靜態時必須以頁面標題作為該頁的檔案名稱, 而無法完成靜態頁面存檔的問題會讓 CMSiMDE 無法順利將動態資料轉為靜態資料. \n', 'tags': '', 'url': 'CMSiMDE 有甚麼使用上的限制嗎比方說能夠使用那些特殊符號, 為什麼不能使用分號, 以及所謂的標題有沒有最多幾個字元的限制, 另外就是假如標題過長, 會發生甚麼狀況與後果.html'}, {'title': 'HW1', 'text': 'PCH 4 \xa0 / Cases, Form Factors, and Power Supplies \n Describe common computer case designs and features. \n Describe common motherboard form factors and suitable cases for each. \n Identify power supply connectors. \n Recommend and install an appropriate power supply given specific hardware to be powered. \n Disassemble and reassemble computers in the most common case designs. \n Test power supplies to ascertain proper functioning. \n \n PCH 9 \xa0 / Networking Overview \n Identify various types of networks, topologies, and network security issues. \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'Computer Cases電腦機箱', 'text': '\n Describe common computer case designs and features. \n 描述常見的計算機機箱設計和功能。 \n Describe common motherboard form factors and suitable cases for each. \n 描述常見的主板外形尺寸和適用的機箱。 \n \n In this lesson, we are going to cover the various cases available for computers, several form factors or layouts of the motherboards, and the different types of power supplies that we use to provide direct current (DC) to the computer’s components. \n 在本課程中，我們將介紹計算機可用的各種情況，主板的幾種外形或佈局以及用於為計算機組件提供直流（DC）的不同類型的電源。 \n From the outside, almost all computers looked the same for a long time, but contemporary systems have really changed the size and shape of the cases available. The most common cases are mid-size or mini-towers, while some people, mostly gamers, still like full-sized towers. Some cases are made in a small form factor (SFF) to be easily carried for portability or to match an entertainment system like a DVD player in size. Servers are often contained in very long and narrow cases that usually range in size from one unit tall (a few inches) to two units tall (about 6-8 inches). Each of these cases provide us with a distinct layout of the motherboard they will accept. This layout is called a form factor. Larger case sizes allow for additional devices (such as hard disk drives and optical drives). The type of case will depend on the customer’s needs. \n \n 從外部看，幾乎所有計算機在很長一段時間內看起來都是一樣的，但是現代系統確實改變了可用機箱的大小和形狀。 最常見的情況是中型或小型塔，而有些人（大多是遊戲玩家）仍然喜歡全尺寸塔。 某些情況下，它們採用小巧的外形（SFF）製成，以便攜帶方便或與DVD播放器等娛樂系統相匹配。 服務器通常裝在非常狹長的情況下，大小通常從一個單位高（幾英寸）到兩個單位高（約6-8英寸）不等。 這些情況中的每一種都為我們提供了可接受的主板佈局。 此佈局稱為形狀因數。 較大的機箱尺寸允許使用其他設備（例如硬盤驅動器和光盤驅動器）。 案例的類型將取決於客戶的需求。 \n \n Tower case. Photo used under CC-BY-NC license from \xa0 Edmund Tse . \n \n 塔盒。這些照片由 謝德茂（Edmund Tse） 根據CC-BY-NC許可使用 。 \n \n \n \n Motherboards and Processors \n 主機板和處理器 \n \n Form Factor \n \n 構成因素 \n The size and arrangement of the motherboard is described as the form factor. The ATX form factor is one of the most widely used form factors in contemporary computers. It has been in use since the 1990s. The ATX form factor contains a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards. \n 母板的尺寸和排列方式描述為外形尺寸。 ATX規格是現代計算機中使用最廣泛的規格之一。 自1990年代以來一直在使用。 ATX外形尺寸包含一個用於集成端口（音頻，視頻，聲音，網絡等）的後端口群集。 擴展插槽平行於電路板的短邊，並且機箱的左側殼體開口可輕鬆添加擴展卡。 \n \n ATX form factor motherboard. Photo used under CC-BY-ND license from \xa0 Lilly Lau . \n ATX尺寸主板。照片由 Lilly Lau 根據CC-BY-ND許可使用 。 \n \n \n The mini-ATX form factor is smaller in size than the ATX form factor, but still contains many of the ATX features, such as a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards. \n As shown in the table below, there are many variations of the ATX form factor, with the main difference being the physical size of the board and the number of expansion slots. Bigger boards allow for additional expansion slots, but require a larger tower. \n 微型ATX尺寸比ATX尺寸小，但仍包含許多ATX功能，例如用於集成端口（音頻，視頻，聲音，網絡等）的後部端口集群。擴展插槽平行於電路板的短邊，並且機箱的左側殼體開口可輕鬆添加擴展卡。 \n 如下表所示，ATX尺寸有很多變化，主要區別是板的物理尺寸和擴展插槽的數量。 更大的板可提供額外的擴展插槽，但需要更大的塔架。 \n \n \n The ITX form factor was created in 2001. The ITX form factor itself was not very popular, but a variant called the mini-ITX became quite popular, since it also fit into ATX-style cases. It also contains a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards, just like the ATX boards. Smaller variations, called pico-ITX and nano-ITX, are often used in computing appliances such as smart televisions, Internet-connected set-top devices designed to integrate with TV sets, and others. \n ITX尺寸規格創建於2001年。ITX尺寸規格本身並不十分流行，但是一個名為mini-ITX的變體就變得非常流行，因為它也適用於ATX風格的機殼。它還為集成端口（音頻，視頻，聲音，網絡等）包含一個後部端口集群。擴展插槽平行於板子的短邊延伸，並且外殼具有左側的外殼開口，以支持輕鬆添加擴展卡，就像ATX板一樣。較小的變體，稱為pico-ITX和nano-ITX，通常用於計算設備中，例如智能電視，旨在與電視機集成的連接互聯網的機頂盒設備等。 \n \n \n Small form factor motherboard. Photo used under CC-BY license from \xa0 Karl-Martin Skonto \n 小型主板。照片由 Karl-Martin Skontorp 根據CC-BY許可使用 。 \n \n', 'tags': '', 'url': 'Computer Cases電腦機箱.html'}, {'title': 'Power Supplies電源', 'text': 'Identify power supply connectors. \n 識別電源連接器。 \n Recommend and install an appropriate power supply given specific hardware to be powered. \n 根據要供電的特定硬件，建議並安裝適當的電源。 \n \n Power supply units (PSUs) are required in all computer systems, since computers are designed to run on direct current (DC), but our home and office outlets only provide alternating current (AC). For a computer to run well, it requires good, clean power from the outlet to the computer’s PSU. The PSU then converts the AC input into DC output to the various subsystems of the computer at the necessary voltages. The PSU creates heat in this transformation from AC to DC. Therefore, a good power supply fan is essential to remove the heat from the PSU and computer system. A power supply is a field replaceable unit (FRU) and should be replaced — never repaired — because the capacitors will hold voltage well after the PSU has been unplugged. \n 所有計算機系統都需要電源單元（PSU），因為計算機被設計為以直流電（DC）運行，但是我們的家庭和辦公室插座僅提供交流電（AC）。 為了使計算機正常運行，需要從插座到計算機PSU的電源乾淨整潔。 然後，PSU將交流輸入轉換為直流輸出，並在必要的電壓下將其輸入計算機的各個子系統。 PSU在從AC轉換為DC的過程中會產生熱量。 因此，良好的電源風扇對於消除PSU和計算機系統的熱量至關重要。 \n 電源是一個現場可更換單元（FRU），應進行更換（切勿修理），因為在拔下PSU後電容器將保持良好的電壓。 \n \n Computer PSU, showing a space for the fan and an electric cord input. Photo used under CC-BY-NC license from \xa0 Jeff Coleman . \n 計算機電源模塊，顯示風扇和電線輸入的空間。照片由 Jeff Coleman \n 根據CC-BY-NC許可使用 。 \n \n Power supplies are rated in watts, with contemporary computer systems requiring 400 watts of power or more. Every device inside the computer requires power and receives it from the PSU. Therefore, the more devices there are inside the computer, the more power that is required from the power supply. A technician should verify that the backward “UR” logo \xa0 \xa0 appears on the power supply, since this indicates that the power supply has been properly safety tested. When purchasing a new computer, the power supply will already have been selected based on the initial configuration of the machine, but if you are adding new components to the workstation, you will need to verify that the power supply has enough wattage to support the existing and new components. To do this, you need to determine the wattage by adding all the devices’ wattage together. If the device is measured in amps, multiply amps times voltage (A x V) to calculate the watts. Power supplies are not 100 percent efficient, nor are they rated to be 100 percent efficient. Therefore, you should always keep the total wattage under 70 percent of the rated wattage of the power supply to ensure proper computer operations. \n 電源的額定功率為瓦特，當代計算機系統需要400瓦特或更高的功率。計算機內部的每個設備都需要電源，並從PSU接收電源。因此，計算機中存在的設備越多，電源所需要的功率就越大。技術人員應驗證向後的“ UR”徽標 出現在電源上，因為這表明電源已經過正確的安全測試。 購買新計算機時，將已經根據計算機的初始配置選擇了電源，但是如果您要向工作站添加新組件，則需要驗證電源是否具有足夠的功率以支持現有電源。和新組件。 為此，您需要通過將所有設備的瓦數相加來確定瓦數。 如果設備以安培為單位測量，則將安培乘以電壓（A x V）以計算瓦數。 電源效率不是100％，也不是額定為100％。 因此， \n \n Power supply specifications. Photo used under CC-BY-NC-ND license from \xa0 Daniel Lu . \n 電源規格。圖片由 Daniel Lu 在CC-BY-NC-ND許可下使用 。 \n \n \n \n Dual Voltage \n 雙電壓 \n Most of today’s computers are built around the world with different voltages. In the United States, power is delivered at 115–120 VAC (voltage alternating current) at 60 hertz. In Europe and Asia, the typical wall outlet provides 230–240 VAC at 50 hertz. If the power supply supports dual voltage, you need to ensure the correct setting is selected. In that situation, there should be a slider button that allows you to select the proper voltage. Slide the button to the appropriate voltage before plugging the power supply into the wall or damage to the computer can occur. \n What do you think would happen if we selected the wrong voltage before plugging it in? Well, if we are in Europe and expecting 230 VAC from the wall, but set the switch to 110 VAC (the United States standard), the power supply would receive an overvoltage condition, damaging the power supply and possibly starting a fire. If instead we took a European PC, which expects 230 VAC, and plugged it into a United States electrical outlet providing 110 VAC, we would get an undervoltage condition, and the computer would not start up. \n 當今大多數計算機都是在世界各地以不同的電壓構建的。在美國，功率在60赫茲的115-120 VAC（交流電壓）下輸送。在歐洲和亞洲，典型的壁裝電源插座以50赫茲提供230-240 VAC。如果電源支持雙電壓，則需要確保選擇正確的設置。在這種情況下，應該有一個滑塊按鈕，可讓您選擇合適的電壓。在將電源插頭插入牆上之前，請將按鈕滑動至適當的電壓，否則可能會損壞計算機。 \n 如果我們在插入之前選擇了錯誤的電壓，您會怎麼辦？ 好吧，如果我們在歐洲並期望牆壁有230 VAC的電壓，但將開關設置為110 VAC（美國標準），則電源將出現過壓狀況，從而損壞電源並可能引發火災。 如果取而代之的是，我們帶了一個歐洲PC，該PC期望提供230 VAC的電源，然後將其插入提供110 VAC的美國電源插座，則將出現欠壓情況，並且計算機將無法啟動。 \n \n \n Power supply port and on/off switch within a metal honeycomb mesh to allow for power supply ventilation. Photo used under CC-BY-SA license from \xa0 Kevin Byrom. \n \n 金屬蜂窩網內的電源端口和開/關開關可允許電源通風。照片由 Kevin Byrom 根據CC-BY-SA許可使用 。 \n \n \n \n \n \n \n', 'tags': '', 'url': 'Power Supplies電源.html'}, {'title': 'Power Supply Connectors電源連接器', 'text': '', 'tags': '', 'url': 'Power Supply Connectors電源連接器.html'}, {'title': 'Replace A Power Supply更換電源', 'text': 'To replace a PSU, you would need to verify the proper wattage for the new power supply and slide the power supply into the case. You then need to screw the power supply into place and connect all the power supply cables to the various internal components. Next, you should check the voltage setting and make sure it is set to 110 VAC for North America or 230 VAC for European/Asian countries. Connect your power cord to the power supply and turn on the computer. If the computer works properly, you can then close the case and secure the enclosure with screws. \n 要更換PSU，您需要驗證新電源的合適功率，並將電源滑入機箱。 然後，您需要將電源固定到位，並將所有電源電纜連接到各個內部組件。 接下來，您應該檢查電壓設置，並確保將其設置為北美的110 VAC或歐洲/亞洲國家的230 VAC。 將電源線連接到電源，然後打開計算機。 如果計算機正常運行，則可以合上機箱並用螺釘固定機箱。 \n In the lab exercise below, you should remove and replace the PC power supply. Be sure to start with the right tools and always use safety precautions, especially when handling the power supply. For the purposes of this lab exercise, you can assume that ESD precautions are in place. \n 在下面的實驗室練習中，您應該卸下並更換PC電源。請務必從正確的工具開始，並始終使用安全預防措施，尤其是在處理電源時。在本實驗中，您可以假定已經採取了ESD預防措施。 \n \n \n \n \n \n \n \n \n \n \n Test a Power Supply測試電源 \n \n \n \n \n \n In order to test a PSU, you can use either a multimeter or a power supply tester. While a multimeter would work, you must be able to know the exact pinout for each type of connector and the amount of voltage to expect from each pin. Instead, it is much simpler to buy one of many different computer power supply testers on the market today. Small LEDs light up to let you know if the power feeds are working correctly. The motherboard power tester also beeps to let you know it is receiving the correct amount of power. This device is a must for anyone who wants to be able to test power supplies quickly and easily. To use it, simply hook up the motherboard power connector (20+4 connector) to the right side of the tester. Next, hook up the power connector for the device (SATA, Molex, Berg, etc.) to the left hand side of the tester. The lights will show up green if you are receiving the proper voltages (3, 5, 12 VDC). \n 為了測試PSU，可以使用萬用表或電源測試儀。儘管萬用表可以工作，但您必須能夠知道每種連接器的確切引腳排列以及每個引腳的預期電壓量。相反，購買當今市場上許多不同的計算機電源測試儀之一要簡單得多。小型LED會亮起，以告知電源是否正常工作。主板電源測試儀還會發出嗶嗶聲，以通知您它正在接收正確數量的電源。對於希望能夠快速輕鬆地測試電源的任何人來說，該設備都是必需的。要使用它，只需將主板電源連接器（20 + 4連接器）連接到測試儀的右側即可。接下來，連接設備的電源連接器（SATA，Molex，Berg等。）到測試儀的左側。如果您接受適當的電壓（3、5、12 VDC），則指示燈將顯示為綠色。 \n \n Power supply tester. Photo used under Creative Commons license from \xa0 Kevin Byrom . \n \n 電源測試儀。照片由 Kevin Byrom 根據Creative Commons許可使用 \xa0 。 \n \xa0 \n \n \n In the lab below, you should test the power supply using the power supply tester and multimeter. Be sure to use proper safety precautions. For the purposes of this lab exercise, you can assume that ESD precautions are in place. \n 在下面的實驗室中，應該使用電源測試儀和萬用表測試電源。 確保使用適當的安全預防措施。 在本實驗中，您可以假定已經採取了ESD預防措施。 \n \n \n \n', 'tags': '', 'url': 'Replace A Power Supply更換電源.html'}, {'title': 'Network Defined by Geography地理位置定義的網絡', 'text': 'Identify various types of networks, topologies, and network security issues. \n 確定各種類型的網絡，拓撲和網絡安全問題。 \n \n \n Overview 總覽 \n In this module, we are going to cover the various types of networks, including local area networks, wide area networks, personal area networks, and metropolitan area networks. Next, we will cover the various network relationships, such as client/server and peer-to-peer, and focus on the types of resources our networks use. Finally, we will talk about the topologies of our networks, such as the bus, the ring, the star, the full mesh, and hybrid network topologies. \n 在本模塊中，我們將涵蓋各種類型的網絡，包括局域網，廣域網，個人局域網和城域網。 接下來，我們將介紹各種網絡關係，例如客戶端/服務器和對等網絡，並集中討論網絡使用的資源類型。 最後，我們將討論網絡的拓撲，例如總線，環形，星形，全網格和混合網絡拓撲。 \n \n \n Network Defined By Geography \n 地理定義的網絡 \n Networks are defined by the geography they cover. We start with the area around a single person, with this area being termed the personal area network (PAN). Next, we expand outward to the local area network (LAN), which can contain an entire office floor or building. Moving outward again, we have the metropolitan area network, which covers the area across the city by connecting multiple LANs together. Finally, we have the wide area network (WAN). This is the largest network we define by geography and it can go across the country or even across the world. A great example of a WAN is the Internet, since it connects many networks together and stretches across the globe. \n 網絡由它們所覆蓋的地理位置定義。 我們從一個人周圍的區域開始，將該區域稱為個人區域網絡（PAN）。 接下來，我們向外擴展到局域網（LAN），該局域網可以包含整個辦公樓層或建築物。 再次向外移動，我們有了城域網，該城域網通過將多個LAN連接在一起而覆蓋了整個城市。 最後，我們有了廣域網（WAN）。 這是我們按地理位置定義的最大網絡，它可以遍及全國，甚至遍及全球。 \n WAN就是一個很好的例子，因為Internet將許多網絡連接在一起並遍及全球。 \n \n Geographic networks. Image used under CC-BY license from \xa0 Jason Dion . \n \n \n \n \n learn by doing \n 地理網絡。圖片由 Jason Dion 根據CC-BY許可使用 。 \n \n \n \n \n \n \n \n \n \n Personal Area Network 個人區域網 \n A PAN has a very small range limited to just a few meters. If you stretch your hands out at your sides and spin around in a circle, this is the physical range of most PANs. Bluetooth is one of the main things we use to create a PAN, although USB and infrared can also be used for these networks. Bluetooth has a range between one meter and 100 meters depending on which class of Bluetooth you are using, but most common Bluetooth devices are class two devices limited to 10 meters. Some good examples of PANs are the connection between a USB hard drive and a laptop, or a Bluetooth cellphone connecting to your car stereo system wirelessly. \n PAN的範圍很小，只有幾米。 如果您將雙手伸向兩側並轉一圈，則這是大多數PAN的物理範圍。 藍牙是我們用於創建PAN的主要內容之一，儘管USB和紅外也可以用於這些網絡。 藍牙的範圍在1米至100米之間，具體取決於您使用的藍牙類別，但是大多數常見的藍牙設備是限於10米的第二類設備。 PAN的一些很好的例子是USB硬盤驅動器和筆記本電腦之間的連接，或者是無線連接到汽車立體聲系統的藍牙手機。 \n \n \n \n \n \n \n \n \n \n \n Local Area Network 局域網 \n The next type of network defined by geography is the LAN, which stands for local area network. The local area network is comprised of several devices that allow computers to connect to each other within a small geographic area. A LAN is, at its most basic, a connection of several workstations together using a hub, switch, or wireless access point. LANs have a limited distance associated with them, with each network segment usually limited to 100 meters or less. Generally, a LAN is used to network the floor of an office, or possibly the entire office building in smaller networks. LANs are generally connected in either a wired or wireless manner. If wired, they are connected using unshielded twisted pair cable using the Ethernet (IEEE 802.3) standard; if wireless, they are connected using Wi-Fi radio signal (IEEE 802.11) standards. \n 地理定義的下一種網絡類型是LAN，它代表局域網。 局域網由幾個設備組成，這些設備使計算機可以在一個較小的地理區域內相互連接。 局域網最基本的是使用集線器，交換機或無線訪問點將多個工作站連接在一起。 局域網的距離有限，每個網段通常限制在100米或更短。 通常，LAN用於將辦公室地板或較小網絡中的整個辦公樓聯網。 LAN通常以有線或無線方式連接。 如果已連接，則使用符合以太網（IEEE 802.3）標準的非屏蔽雙絞線電纜進行連接； 如果為無線，則它們使用Wi-Fi無線電信號（IEEE 802.11）標准進行連接。 \n \n Simple LAN diagram. Public domain image obtained from \xa0 Wierzbadark . \n \n \n Caption. Complex LAN diagram. Used with permission. Copyright: \xa0 ohmega 1982/123 RF Stock Photo . \n 標題。複雜的局域網圖。經許可使用。版權所有： ohmega 1982/123 RF Stock Photo 。 \n \n \n \n', 'tags': '', 'url': 'Network Defined by Geography地理位置定義的網絡.html'}]};