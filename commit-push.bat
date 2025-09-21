@echo off
:: ==========================================================
:: Git Commit & Push Automático - Versión Visual
:: ==========================================================
title 🚀 Git Commit & Push 🚀

:: ==========================
:: Configuración de color
:: ==========================
:: Fondo negro, texto verde brillante
color 0A

:: ==========================
:: Obtener nombre del remoto y URL
:: ==========================
for /f "tokens=1,2" %%a in ('git remote -v ^| find "push"') do (
    set remote_name=%%a
    set remote_url=%%b
    goto :remote_done
)
:remote_done

:: ==========================
:: Obtener rama actual
:: ==========================
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i

:: ==========================
:: Encabezado visual
:: ==========================
cls
echo ╔═══════════════════════════════════════╗
echo ║        🚀 Git Commit & Push 🚀        ║
echo ╚═══════════════════════════════════════╝
echo.
echo 🗂  Repositorio: %remote_url%
echo 🌿 Rama actual: %current_branch%
echo.

:: ==========================
:: Solicitar mensaje de commit
:: ==========================
set /p msg= Escribí el mensaje del commit (enter = usar fecha): 

if "%msg%"=="" (
    :: Formato de fecha YYYY-MM-DD
    for /f "tokens=2-4 delims=/ " %%a in ("%date%") do (
        set fecha=%%c-%%a-%%b
    )
    set msg=Actualizacion-%fecha%
)

echo.
echo 📝 Commit seleccionado: "%msg%"
echo.

:: ==========================
:: Ejecutar comandos git
:: ==========================
echo ⏳ Agregando archivos...
git add .
echo ⏳ Realizando commit...
git commit -m "%msg%"
echo ⏳ Subiendo al remoto...
git push %remote_name% %current_branch%

:: ==========================
:: Mensaje final
:: ==========================
echo.
echo ✅ Proceso completado en %current_branch% → %remote_url%
echo.
echo Presioná cualquier tecla para cerrar...
pause >nul
