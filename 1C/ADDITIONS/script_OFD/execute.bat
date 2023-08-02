@ECHO ON
cd C:\Users\nochevkin\Desktop\app\PROJECT_QUARTZ\1C\ADDITIONS\script_OFD\JS
node script.js
@ECHO OFF
if ["%errorlevel%"]==["0"] (
    echo Closing the application...
    for /l %%i in (5,-1,1) do (
        echo Programm closing in %%i...
        timeout /T 1 >nul
    )   
)
rem catching error and preventing the batch file from closing
if NOT ["%errorlevel%"]==["0"] (
    echo Unexpected error occured while compiling JavaScript... Restart the application. If unsuccessful contact your administrator.
    pause
    echo Closing the application...
    for /l %%i in (5,-1,1) do (
        echo Programm closing in %%i...
        timeout /T 1 >nul
    )
) 


