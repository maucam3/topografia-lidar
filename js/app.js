// Banco de datos con la información de cada paso del flujo
const workflowSteps = {
    1: {
        num: "FASE 01",
        title: "Planificación de Vuelo y GCPs",
        desc: "Diseño de la ruta de vuelo automatizada para el dron con solape longitudinal del 80%. Ubicación estratégica de Puntos de Control Terrestre (GCPs) mediante GPS RTK para máxima precisión.",
        tools: "DJI Pilot 2, Emlid Studio"
    },
    2: {
        num: "FASE 02",
        title: "Captura LiDAR & Dron",
        desc: "Vuelo autónomo del UAV equipado con sensor láser. Emisión de pulsos multi-retorno capaces de atravesar la vegetación y registrar la altitud exacta del terreno natural.",
        tools: "Dron UAV + Sensor LiDAR (Zenmuse L1/L2)"
    },
    3: {
        num: "FASE 03",
        title: "Procesamiento y Filtrado 3D",
        desc: "Limpieza informático de ruido ambiental y separación automatizada de objetos: clasificación entre terreno, vegetación alta/baja y estructuras arquitectónicas.",
        tools: "CloudCompare, Agisoft Metashape, DJI Terra"
    },
    4: {
        num: "FASE 04",
        title: "Entregables BIM / CAD",
        desc: "Generación del Modelo Digital de Elevaciones (MDE), ortomosaicos y curvas de nivel a cada 0.50 m para importación directa en programas de diseño arquitectónico.",
        tools: "Autodesk Revit, AutoCAD Civil 3D"
    }
};

// Función para cambiar de paso dinámicamente
function selectStep(stepId) {
    // 1. Quitar clase 'active' de todos los botones y ponerla en el presionado
    const buttons = document.querySelectorAll('.step-btn');
    buttons.forEach((btn, index) => {
        if (index + 1 === stepId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Obtener datos del paso seleccionado
    const data = workflowSteps[stepId];

    // 3. Actualizar el DOM (los elementos HTML en pantalla)
    document.getElementById('cardStepNum').innerText = data.num;
    document.getElementById('cardTitle').innerText = data.title;
    document.getElementById('cardDesc').innerText = data.desc;
    document.getElementById('cardTools').innerText = data.tools;
}

// Función para cambiar de capa en el simulador
function changeLayer(layerType) {
    // Actualizar botones del simulador
    const btns = document.querySelectorAll('.layer-btn');
    btns.forEach(btn => btn.classList.remove('active'));

    const statusSpan = document.querySelector('#simStatus span');

    if (layerType === 'lidar') {
        document.getElementById('btn-lidar').classList.add('active');
        statusSpan.innerText = "Nube de Puntos LiDAR (3D)";
    } else if (layerType === 'dem') {
        document.getElementById('btn-dem').classList.add('active');
        statusSpan.innerText = "Modelo Digital de Elevaciones (MDE)";
    } else if (layerType === 'photo') {
        document.getElementById('btn-photo').classList.add('active');
        statusSpan.innerText = "Ortofotografía Aérea RGB";
    }
}