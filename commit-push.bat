@echo off
title Git Commit & Push
color 0A

:: Obtener nombre del remoto y la URL
for /f "tokens=1,2" %%a in ('git remote -v ^| find "push"') do (
    set remote_name=%%a
    set remote_url=%%b
    goto :remote_done
)
:remote_done

:: Obtener rama actual
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i

echo ========================================
echo        🚀 Commit & Push Automático 🚀
echo ========================================
echo.
echo 🗂  Repositorio: %remote_url%
echo 🌿 Rama actual: %current_branch%
echo.

:: Mensaje de commit
set /p msg= Escribí el mensaje del commit (dejar vacío para usar fecha): 

if "%msg%"=="" (
    for /f "tokens=1-4 delims=/ " %%a in ("%date%") do (
        set fecha=%%a-%%b-%%c
    )
    set msg=Actualizacion-%fecha%
)

echo.
echo 📝 Commit: "%msg%"
echo.

:: Ejecutar comandos git
git add .
git commit -m "%msg%"
git push %remote_name% %current_branch%

echo.
echo ✅ Proceso completado en %current_branch% → %remote_url%
echo Cerrar con cualquier tecla...
pause >nul
