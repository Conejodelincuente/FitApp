# FitApp 🏋️‍♂️📱

FitApp es un MVP para la gestión y reserva de clases dirigidas en centros deportivos de alta intensidad y boxes de CrossFit. 
Desarrollado con React Native y Expo como proyecto final de Coderhouse.

# 🚀 Demo e Instalación
Clonar el repositorio:

   git clone [https://github.com/Conejodelincuente/FitApp/tree/main)]
   cd fitapp



## Tecnologías utilizadas

- React Native
- React Navigation (Tabs & Stack)
- Firebase / Firestore
- Firebase Auth
- Expo
- Context API

## Funcionalidades principales
- Autenticarse de forma segura: Registro e inicio de sesión de atletas a través de Firebase Auth.
- Ver un dashboard de actividad: El Home muestra un resumen con las próximas reservas activas del usuario.
- Filtrar clases por sede: El listado general (ClassesScreen) muestra los horarios dinámicos indexados según el centro deportivo asignado al perfil del atleta.
- Ver el detalle de cada clase: Información atómica de la sesión (cupos disponibles, coach, hora) y visualización del WOD (Workout of the Day).
- Reservar y cancelar plazas: Gestión transaccional de cupos en tiempo real mediante los métodos arrayUnion y arrayRemove de Firestore.
- Confirmar acciones críticas: Unificación de alertas visuales mediante un Contexto de Modal Global para evitar cancelaciones accidentales.
- Sincronización Offline: Soporte nativo para operar e inscribirse a clases sin conexión a internet mediante colas de escrituras en caché.









