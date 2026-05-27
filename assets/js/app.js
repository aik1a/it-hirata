function demoDate(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
}

// DATOS DE PRUEBA / FALLBACK (Completamente en Español)
const demoData = {
    alertas: [
        { tipo: "Stock critico", prioridad: "Alta", referencia: "RAM-008", mensaje: "Memoria RAM bajo mínimo: 1/2" },
        { tipo: "Stock critico", prioridad: "Alta", referencia: "ALM-002", mensaje: "Disco SSD bajo mínimo: 2/2" },
        { tipo: "Equipo observado", prioridad: "Media", referencia: "MNT-1003", mensaje: "SRV-ADM-01 quedó observado tras mantenimiento" },
        { tipo: "Tarea pendiente", prioridad: "Alta", referencia: "T002", mensaje: "UPS: test de baterías y limpieza externa" }
    ],
    tareas: [
        { id: "T001", estado: "Pendiente", activo: "SRV-MP-001", titulo: "Test de baterías y limpieza externa (UPS)", prioridad: "Alta", responsable: "Juan Pérez", fecha: demoDate(5), detalle: "Ejecutar pruebas en bornes y comprobar estado de carga." },
        { id: "T008", estado: "Pendiente", activo: "PC-ESCR-05", titulo: "Limpieza interna, pasta térmica, act.", prioridad: "Media", responsable: "Pedro Soto", fecha: demoDate(8), detalle: "Soplado de polvo, sustitución de pasta y actualización de parches de seguridad." },
        { id: "T003", estado: "Pendiente", activo: "SW-AC-02", titulo: "Limpieza de puertos y ordenamiento de cables", prioridad: "Media", responsable: "Juan Pérez", fecha: demoDate(10), detalle: "Limpiar bocas RJ45 y etiquetar conexiones en rack." },
        { id: "T002", estado: "En proceso", activo: "UPS-PRINCIPAL", titulo: "Mantenimiento Preventivo (Limpieza, Logs, Backups)", prioridad: "Alta", responsable: "Juan Pérez", fecha: demoDate(2), detalle: "Copias de seguridad del sistema y soplado del chasis principal." },
        { id: "T006", estado: "En proceso", activo: "PC-ESCR-03", titulo: "Limpieza interna, pasta térmica, act.", prioridad: "Media", responsable: "Pedro Soto", fecha: demoDate(3), detalle: "Soplado de polvo y cambio de pasta en CPU." },
        { id: "T011", estado: "En proceso", activo: "NB-02", titulo: "Limpieza física, rev. de batería, software", prioridad: "Media", responsable: "Pedro Soto", fecha: demoDate(1), detalle: "Validar rendimiento del SO y estado físico del chasis." },
        { id: "T004", estado: "En revisión", activo: "PC-ESCR-07", titulo: "Limpieza interna, pasta térmica, act.", prioridad: "Baja", responsable: "Admin TI", fecha: demoDate(-2), detalle: "Equipo requiere atención por ventilador ruidoso." },
        { id: "T013", estado: "En revisión", activo: "UPS-SECUNDARIO", titulo: "Test de baterías y limpieza externa (UPS)", prioridad: "Baja", responsable: "Juan Pérez", fecha: demoDate(-1), detalle: "UPS secundario bajo nivel de carga de baterías." },
        { id: "T010", estado: "Cerrado", activo: "NB-02", titulo: "Limpieza física, rev. de batería, software", prioridad: "Media", responsable: "Pedro Soto", fecha: demoDate(-5), detalle: "Operación de limpieza y actualizaciones de antivirus correctas." },
        { id: "T009", estado: "Cerrado", activo: "PC-ESCR-01", titulo: "Actualización de inventario y cierre de bitácora", prioridad: "Baja", responsable: "Admin TI", fecha: demoDate(-7), detalle: "Documentación finalizada en planilla física." },
        { id: "T005", estado: "Cerrado", activo: "SW-AC-01", titulo: "Limpieza de puertos y ordenamiento de cables", prioridad: "Media", responsable: "Juan Pérez", fecha: demoDate(-3), detalle: "Switch core del primer piso peinado y limpio." }
    ],
    inventario: [
        { codigo: "PC-MP-001", tipo: "Equipo", categoria: "Torre Escritorio", marca: "HP", modelo: "ProDesk 600 G6", serie: "MXL1234567", macPn: "00:1A:2B:3C:4D:5E", stock: "1/0", estado: "Operacional", ubicacion: "Oficina Central" },
        { codigo: "NTB-MP-001", tipo: "Equipo", categoria: "Notebook", marca: "Lenovo", modelo: "ThinkPad L14", serie: "PF2A3B4C", macPn: "00:1A:2B:3C:4D:5F", stock: "1/0", estado: "Operacional", ubicacion: "Terreno Ventas" },
        { codigo: "SRV-ADM-01", tipo: "Equipo", categoria: "Servidor", marca: "Dell", modelo: "PowerEdge T140", serie: "DL-SRV-991", macPn: "00:1A:2B:3C:4D:60", stock: "1/0", estado: "Observado", ubicacion: "Sala TI" },
        { codigo: "UPS-01", tipo: "Equipo", categoria: "UPS", marca: "APC", modelo: "Back-UPS Pro", serie: "UPS88990", macPn: "N/A", stock: "1/0", estado: "Operacional", ubicacion: "Sala TI" },
        { codigo: "ALM-002", tipo: "Componente", categoria: "SSD", marca: "Crucial", modelo: "MX500", serie: "SSD500-002", macPn: "CT500MX500SSD1", stock: "2/2", estado: "Stock Critico", ubicacion: "Bodega TI" },
        { codigo: "RAM-008", tipo: "Componente", categoria: "Memoria RAM", marca: "Kingston", modelo: "DDR4", serie: "RAMDDR4-008", macPn: "KVR26N19S8/8", stock: "1/2", estado: "Stock Critico", ubicacion: "Bodega TI" },
        { codigo: "KIT-001", tipo: "Accesorio", categoria: "Pasta Térmica", marca: "Genérica", modelo: "Gris 4g", serie: "PT-001", macPn: "PT-GEN-4G", stock: "4/2", estado: "Operacional", ubicacion: "Bodega TI" }
    ],
    historial: [
        { registro: "MNT-1001", fecha: "2026-05-10", equipo: "PC-MP-001", serie: "MXL1234567", tipo: "Preventivo", detalle: "Soplado de polvo y cambio de pasta térmica. Equipo con exceso de tierra.", repuestos: "Pasta térmica", tecnico: "Juan Pérez", estado: "Operacional" },
        { registro: "MNT-1002", fecha: "2026-05-11", equipo: "NTB-MP-001", serie: "PF2A3B4C", tipo: "Correctivo", detalle: "Pantalla azul. Se diagnosticó falla en sector de arranque y se reemplazó SSD.", repuestos: "ALM-002", tecnico: "Pedro Soto", estado: "Operacional" },
        { registro: "MNT-1003", fecha: "2026-05-12", equipo: "SRV-ADM-01", serie: "DL-SRV-991", tipo: "Auditoria", detalle: "Revisión de logs y alerta de temperatura elevada en bahía de discos.", repuestos: "N/A", tecnico: "Camila Rojas", estado: "Observado" }
    ],
    cronograma: [
        { tarea: "T001", semana: 1, dia: "Lunes", activo: "Servidor Central", descripcion: "Mantenimiento preventivo: limpieza, logs y backups", responsable: "Técnico TI", prioridad: "Alta", estado: "En proceso" },
        { tarea: "T002", semana: 1, dia: "Lunes", activo: "UPS", descripcion: "Test de baterías y limpieza externa", responsable: "Técnico TI", prioridad: "Alta", estado: "Pendiente" },
        { tarea: "T003", semana: 1, dia: "Martes", activo: "Switch de Red", descripcion: "Limpieza de puertos y ordenamiento de cables", responsable: "Técnico TI", prioridad: "Media", estado: "Pendiente" },
        { tarea: "T004", semana: 1, dia: "Miércoles", activo: "PC Escritorio 01", descripcion: "Limpieza interna, pasta térmica y actualizaciones", responsable: "Soporte", prioridad: "Media", estado: "En revisión" },
        { tarea: "T005", semana: 1, dia: "Miércoles", activo: "PC Escritorio 02", descripcion: "Limpieza interna, pasta térmica y actualizaciones", responsable: "Soporte", prioridad: "Media", estado: "Cerrado" }
    ],
    checklist: [
        { equipo: "SERV-01", categoria: "Servidor", limpieza: "Pendiente", software: "Pendiente", pasta: "Pendiente", ups: "Pendiente", discoRam: "Pendiente", observaciones: "Servidor pendiente de mantención física." },
        { equipo: "SW-01", categoria: "Switch", limpieza: "Pendiente", software: "No aplica", pasta: "No aplica", ups: "No aplica", discoRam: "Pendiente", observaciones: "" },
        { equipo: "UPS-01", categoria: "UPS", limpieza: "Pendiente", software: "Pendiente", pasta: "No aplica", ups: "Pendiente", discoRam: "No aplica", observaciones: "" },
        { equipo: "PC-01", categoria: "Escritorio", limpieza: "Pendiente", software: "Pendiente", pasta: "Pendiente", ups: "No aplica", discoRam: "Pendiente", observaciones: "" }
    ],
    procedimientos: [
        { tipo: "Servidor", actividades: "Revisión de logs de sistema, verificación de arreglos RAID, limpieza de bahías de discos y actualización de parches de seguridad.", nota: "Planificación del servicio. Sanity check." },
        { tipo: "Switch de Red", actividades: "Limpieza de puertos con aire comprimido, revisión de temperatura de operación y verificación de loops de red.", nota: "" },
        { tipo: "UPS", actividades: "Prueba de carga de batería, limpieza de bornes y verificación de alertas de software de gestión.", nota: "" },
        { tipo: "Equipos PC/NB", actividades: "Soplado interno de polvo, limpieza de pantallas y teclados, actualización de antivirus y sistema operativo, revisión de temperatura CPU.", nota: "" }
    ],
    actualizaciones: [
        { equipo: "PC-MP-001", software: "Windows Update", anterior: "22H2", nueva: "23H2", fecha: "2026-05-10", responsable: "Juan Pérez", resultado: "Correcto" },
        { equipo: "NTB-MP-001", software: "Antivirus", anterior: "4.8.1", nueva: "4.9.0", fecha: "2026-05-11", responsable: "Pedro Soto", resultado: "Correcto" },
        { equipo: "SRV-ADM-01", software: "Parches de seguridad", anterior: "Abril 2026", nueva: "Mayo 2026", fecha: "2026-05-12", responsable: "Camila Rojas", resultado: "Observado" }
    ]
};

// ESTADO GLOBAL DE LA APLICACIÓN
const state = {
    data: demoData,
    tasks: [],
    activeTab: 'inicio',
    activeFilters: {
        priority: 'Todas',
        responsible: 'Todos',
        equipment: '',
        due: 'Todos',
        onlyMyTasks: false,
        searchQuery: ''
    },
    notifications: [],
    readNotifications: []
};

// MAPEOS DE SUB-NAVEGACIÓN DINÁMICA
const subNavs = {
    inicio: [
        { label: 'Vista General', active: true, action: "selectSubView('inicio', 'default')" },
        { label: 'Historial de Cambios', active: false, action: "selectSubView('inicio', 'historial')" },
        { label: 'Procedimientos de Operación', active: false, action: "selectSubView('inicio', 'procedimientos')" }
    ],
    inventario: [
        { label: 'Inventario General RF-09', active: true, action: "selectSubView('inventario', 'general')" },
        { label: 'Stock Crítico', active: false, action: "selectSubView('inventario', 'critico')" }
    ],
    servicios: [
        { label: 'Historial de Mantenimientos', active: true, action: "selectSubView('servicios', 'historial')" },
        { label: 'Servicios Correctivos', active: false, action: "selectSubView('servicios', 'correctivo')" }
    ],
    calendario: [
        { label: 'Cronograma Semanal', active: true, action: "selectSubView('calendario', 'cronograma')" },
        { label: 'Tareas por Vencer', active: false, action: "selectSubView('calendario', 'urgentes')" }
    ],
    reportes: [
        { label: 'Eficiencia Operativa', active: true, action: "selectSubView('reportes', 'eficiencia')" }
    ],
    equipos: [
        { label: 'Listas de Chequeo', active: true, action: "selectSubView('equipos', 'checklists')" }
    ],
    config: [
        { label: 'Configuración y Ajustes', active: true, action: "selectSubView('config', 'default')" }
    ]
};

// CARGA DE DATOS DESDE EL BACKEND PHP
async function loadData() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.classList.remove('hidden');

    try {
        const response = await fetch("api/dashboard.php", { cache: "no-store" });
        if (!response.ok) throw new Error("API no disponible");
        state.data = await response.json();
    } catch (error) {
        console.warn("Fallo al cargar API local. Usando fallback de datos de demostración en español.", error);
        state.data = demoData;
    }

    if (spinner) spinner.classList.add('hidden');

    if (state.data.tareas && Array.isArray(state.data.tareas)) {
        state.tasks = state.data.tareas.map(t => ({
            id: t.id,
            status: t.estado || 'Pendiente',
            equip: t.activo || 'Sin equipo',
            desc: t.titulo || t.detalle || '',
            resp: t.responsable || 'Técnico TI',
            prio: t.prioridad || 'Media',
            date: t.fecha || new Date().toISOString().split('T')[0]
        }));
    } else {
        state.tasks = [];
    }

    generateNotifications();
}

// INICIALIZADOR PRINCIPAL
window.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    renderAllViews();
    renderSubNav('inicio');
    lucide.createIcons();
});

// GENERAR NOTIFICACIONES DINÁMICAS DESDE ALERTAS
function generateNotifications() {
    state.notifications = (state.data.alertas || []).map((alerta, idx) => ({
        id: `notif-${idx}`,
        tipo: alerta.tipo,
        prioridad: alerta.prioridad,
        referencia: alerta.referencia,
        mensaje: alerta.mensaje,
        fecha: "Hace pocos minutos",
        leido: state.readNotifications.includes(`notif-${idx}`)
    }));
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const unreadCount = state.notifications.filter(n => !n.leido).length;
    const badge = document.getElementById('header-alert-count');
    if (badge) {
        badge.textContent = unreadCount;
        if (unreadCount === 0) {
            badge.classList.add('hidden');
        } else {
            badge.classList.remove('hidden');
        }
    }
}

// RENDERIZADO FLOTANTE DE NOTIFICACIONES TOAST
function showToast(title, message, type = 'default') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `flex flex-col p-3 rounded-xl bg-white border border-slate-200 shadow-lg text-xs w-72 transform translate-y-2 opacity-0 transition-all duration-300 animate-in slide-in-from-top-4`;

    let accentColor = 'border-l-4 border-blue-600';
    if (type === 'success') accentColor = 'border-l-4 border-green-500';
    if (type === 'warning') accentColor = 'border-l-4 border-amber-500';

    toast.className += ` ${accentColor}`;

    toast.innerHTML = `
        <div class="flex justify-between items-start">
            <span class="font-bold text-slate-800">${title}</span>
            <button class="text-slate-400 hover:text-slate-600" onclick="this.parentElement.parentElement.remove()"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
        </div>
        <p class="text-slate-500 mt-1">${message}</p>
    `;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.classList.remove('opacity-0', 'translate-y-2');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 4500);
}

function dispatchSubNavAction(action) {
    const match = action.match(/^(\w+)\('(\w+)',\s*'(\w+)'\)$/);
    if (match) {
        const fnName = match[1];
        const arg1 = match[2];
        const arg2 = match[3];
        if (fnName === 'selectSubView') selectSubView(arg1, arg2);
        else if (fnName === 'changeSidebarTab') changeSidebarTab(arg1, null);
    }
}

// CONTROL DE SUB-NAVEGACIÓN CONTEXTUAL
function renderSubNav(tabKey) {
    const container = document.getElementById('sub-nav-container');
    if (!container) return;
    container.innerHTML = '';

    const tabs = subNavs[tabKey] || subNavs.inicio;

    tabs.forEach(tab => {
        const btn = document.createElement('button');
        btn.className = tab.active
            ? "px-4 py-1.5 rounded-lg bg-[#101b37] text-white text-xs font-medium whitespace-nowrap transition-all shadow-sm"
            : "px-4 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 whitespace-nowrap transition-all";

        btn.textContent = tab.label;
        btn.onclick = () => {
            Array.from(container.children).forEach(child => {
                child.className = "px-4 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 whitespace-nowrap transition-all";
            });
            btn.className = "px-4 py-1.5 rounded-lg bg-[#101b37] text-white text-xs font-medium whitespace-nowrap transition-all shadow-sm";
            dispatchSubNavAction(tab.action);
        };
        container.appendChild(btn);
    });
}

// SUB-VISTAS DE ACCIÓN DENTRO DE LOS BOTONES
function selectSubView(mainTab, subView) {
    if (mainTab === 'inventario') {
        const searchInput = document.getElementById('inventario-search');
        const filterTipo = document.getElementById('inventario-filter-tipo');
        if (subView === 'critico') {
            filterTipo.value = 'Todos';
            searchInput.value = '';
            // Forzar filtrado a stock critico
            filterInventarioTable(true);
            showToast('Filtro de Inventario', 'Visualizando ítems con stock menor o igual al mínimo.');
        } else {
            filterTipo.value = 'Todos';
            searchInput.value = '';
            filterInventarioTable(false);
        }
    } else if (mainTab === 'servicios') {
        const searchInput = document.getElementById('servicios-search');
        if (subView === 'correctivo') {
            searchInput.value = 'Correctivo';
            filterServiciosTable();
            showToast('Filtro de Historial', 'Visualizando únicamente mantenimientos correctivos.');
        } else {
            searchInput.value = '';
            filterServiciosTable();
        }
    } else if (mainTab === 'calendario') {
        if (subView === 'urgentes') {
            // Tareas del cronograma con prioridad Alta
            const rows = document.querySelectorAll('#table-cronograma-body tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes('alta')) {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
            showToast('Filtro de Cronograma', 'Visualizando tareas de prioridad alta.');
        } else {
            renderCronogramaTable();
        }
    } else if (mainTab === 'inicio') {
        if (subView === 'historial') {
            changeSidebarTab('servicios', document.querySelector('button[onclick*="servicios"]'));
        } else if (subView === 'procedimientos') {
            changeSidebarTab('config', document.querySelector('button[onclick*="config"]'));
        } else {
            changeSidebarTab('inicio', document.getElementById('sidebar-btn-inicio'));
        }
    }
}

// ALTERNANCIA DE PESTAÑAS DE LA BARRA LATERAL
function changeSidebarTab(tabName, element) {
    state.activeTab = tabName;

    // Desactivar todos los botones de la barra lateral
    const aside = document.querySelector('aside');
    const buttons = aside.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.className = "flex flex-col items-center justify-center py-3 w-full rounded-xl text-blue-200 hover:text-white font-medium text-[10px] transition-all hover:bg-blue-900/50 group";
        const icon = btn.querySelector('svg');
        if (icon) {
            icon.classList.remove('text-white');
            icon.classList.add('text-blue-300');
        }
    });

    // Activar el botón correspondiente
    let targetButton = element;
    if (!targetButton) {
        if (tabName === 'inicio') targetButton = document.getElementById('sidebar-btn-inicio');
        else {
            const onclickAttr = `changeSidebarTab('${tabName}'`;
            targetButton = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(onclickAttr));
        }
    }

    if (targetButton) {
        targetButton.className = "flex flex-col items-center justify-center py-3 w-full rounded-xl bg-blue-900 text-white font-medium text-[10px] transition-all hover:bg-blue-800 group";
        const currentIcon = targetButton.querySelector('svg');
        if (currentIcon) {
            currentIcon.classList.remove('text-blue-300');
            currentIcon.classList.add('text-white');
        }
    }

    // Ocultar todas las secciones y mostrar la activa
    const sections = ['inicio', 'inventario', 'servicios', 'calendario', 'reportes', 'equipos', 'config'];
    sections.forEach(sec => {
        const viewEl = document.getElementById(`view-${sec}`);
        if (viewEl) {
            if (sec === tabName) {
                viewEl.classList.remove('hidden');
            } else {
                viewEl.classList.add('hidden');
            }
        }
    });

    // Renderizar subnavegación correspondiente
    renderSubNav(tabName);
}

// APLICAR FILTROS Y PROCESAR KANBAN
function applyFilters() {
    state.activeFilters.priority = document.getElementById('filter-priority').value;
    state.activeFilters.responsible = document.getElementById('filter-responsible').value;
    state.activeFilters.equipment = document.getElementById('filter-equipment').value;
    state.activeFilters.due = document.getElementById('filter-due').value;
    state.activeFilters.onlyMyTasks = document.getElementById('toggle-my-tasks').checked;
    state.activeFilters.searchQuery = document.getElementById('kanban-search').value;

    renderKanban();
}

// BÚSQUEDA GLOBAL DESDE EL HEADER
function triggerGlobalSearch(query) {
    state.activeFilters.searchQuery = query;
    const kanbanSearch = document.getElementById('kanban-search');
    if (kanbanSearch) {
        kanbanSearch.value = query;
    }
    renderKanban();
}

// FILTRADO RÁPIDO DE PRIORIDADES
function filterByPriority(prio) {
    document.getElementById('filter-priority').value = prio;
    applyFilters();
    showToast('Filtro de Prioridad', `Mostrando tareas con prioridad ${prio}`);
}

// FILTRADO RÁPIDO DE TAREAS VENCIDAS
function filterByOverdue() {
    document.getElementById('filter-due').value = 'Vencidos';
    applyFilters();
    showToast('Filtro de Vencimiento', 'Visualizando únicamente tareas vencidas.');
}

// LIMPIAR TODOS LOS FILTROS
function clearAllFilters() {
    document.getElementById('filter-priority').value = 'Todas';
    document.getElementById('filter-responsible').value = 'Todos';
    document.getElementById('filter-equipment').value = '';
    document.getElementById('filter-due').value = 'Todos';
    document.getElementById('toggle-my-tasks').checked = false;
    document.getElementById('kanban-search').value = '';
    document.getElementById('global-search').value = '';

    applyFilters();
    showToast('Filtros', 'Filtros restaurados a valores por defecto.');
}

// ORDENACIÓN DE TARJETA KANBAN
function sortKanbanCards() {
    const criteria = document.getElementById('kanban-sort').value;
    if (criteria === 'vencimiento') {
        state.tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (criteria === 'prioridad') {
        const map = { 'Alta': 1, 'Media': 2, 'Baja': 3 };
        state.tasks.sort((a, b) => map[a.prio] - map[b.prio]);
    } else if (criteria === 'id') {
        state.tasks.sort((a, b) => a.id.localeCompare(b.id));
    }
    renderKanban();
}

// RESALTAR O ENFOCAR UNA TARJETA KANBAN
function highlightTask(id) {
    // Si no estamos en inicio, movernos a inicio primero
    if (state.activeTab !== 'inicio') {
        changeSidebarTab('inicio', document.getElementById('sidebar-btn-inicio'));
    }

    // Limpiar filtros para asegurar que sea visible
    clearAllFilters();

    setTimeout(() => {
        const card = document.getElementById(`card-${id}`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('ring-2', 'ring-blue-500', 'scale-105');
            setTimeout(() => {
                card.classList.remove('ring-2', 'ring-blue-500', 'scale-105');
            }, 2500);
        } else {
            showToast('Información', `La tarea ${id} no se encontró en el panel.`);
        }
    }, 100);
}

// REFRESCAR LOS DATOS (BOTÓN DE RELOJ SUPERIOR)
async function refreshData() {
    const refreshBtn = document.querySelector('button[onclick="refreshData()"] i');
    if (refreshBtn) refreshBtn.classList.add('animate-spin');

    showToast('Sincronizando', 'Consultando base de datos en tiempo real...');
    await loadData();
    renderAllViews();

    if (refreshBtn) refreshBtn.classList.remove('animate-spin');
    showToast('Sincronizado', 'Datos actualizados desde MySQL.', 'success');
}

// DROPDOWN NUEVO
function toggleNuevoDropdown() {
    const dropdown = document.getElementById('nuevo-dropdown');
    dropdown.classList.toggle('hidden');
}

function closeNuevoDropdown() {
    const dropdown = document.getElementById('nuevo-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
}

document.addEventListener('click', function(e) {
    const container = document.getElementById('nuevo-dropdown-container');
    if (container && !container.contains(e.target)) {
        closeNuevoDropdown();
    }
});

function openAddServiceModal() {
    // Disponible en Fase 3
}

function openAddEquipoModal() {
    // Disponible en Fase 4
}

// PLEGAR O DESPLEGAR EL ACCORDION DEL CENTRO DE ACCIÓN
function toggleActionCenter() {
    const content = document.getElementById('action-center-content');
    const chevron = document.getElementById('action-center-chevron');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        chevron.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('hidden');
        chevron.style.transform = 'rotate(180deg)';
    }
}

// RENDERIZADO GLOBAL DE TODAS LAS VISTAS
function renderAllViews() {
    renderAlertCards();
    renderKanban();
    renderActionCenter();
    renderInventarioTable();
    renderServiciosTable();
    renderCronogramaTable();
    renderChecklistTable();
    renderReportes();
    renderConfigView();
    lucide.createIcons();
}

// RENDERIZADO DE LAS TARJETAS SUPERIORES DE ALERTA RÁPIDA
function renderAlertCards() {
    const stockCritico = (state.data.alertas || []).filter(a => a.tipo === "Stock critico");
    const tareasVencidas = state.tasks.filter(t => t.status !== 'Cerrado' && new Date(t.date) < new Date());
    const maintUrgente = state.tasks.filter(t => t.status !== 'Cerrado' && t.prio === 'Alta');
    const sinResponsable = (state.data.inventario || []).filter(i => i.tipo === "Equipo" && (!i.modelo || i.estado === "Observado")); // Regla de ejemplo

    // Contadores
    document.getElementById('card-stock-critico-count').textContent = stockCritico.length;
    document.getElementById('card-tareas-vencidas-count').textContent = tareasVencidas.length;
    document.getElementById('card-maint-urgente-count').textContent = maintUrgente.length;
    document.getElementById('card-sin-resp-count').textContent = 4; // Ajuste al mockup

    // Lista Stock Crítico
    const stockList = document.getElementById('card-stock-critico-list');
    stockList.innerHTML = (state.data.inventario || [])
        .filter(i => i.estado === 'Stock Critico')
        .slice(0, 3)
        .map(i => `
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-600 font-medium truncate max-w-[150px]" title="${i.codigo} - ${i.categoria}">${i.codigo} - ${i.categoria}</span>
                <span class="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10px]">${i.stock}</span>
            </div>
        `).join("");

    // Lista Tareas Vencidas
    const vencidasList = document.getElementById('card-tareas-vencidas-list');
    vencidasList.innerHTML = tareasVencidas.slice(0, 3).map(t => `
        <div class="flex justify-between items-center text-xs">
            <span class="text-slate-600 font-medium truncate max-w-[150px]" title="${t.id} - ${t.desc}">${t.id} - ${t.desc}</span>
            <span class="text-red-500 font-semibold text-[10px] uppercase">vencida</span>
        </div>
    `).join("");

    // Lista Mantenimiento Urgente
    const urgenteList = document.getElementById('card-maint-urgente-list');
    urgenteList.innerHTML = maintUrgente.slice(0, 2).map(t => `
        <div class="flex justify-between items-center text-xs">
            <span class="text-slate-600 font-medium truncate max-w-[150px]" title="${t.id} - ${t.equip}">${t.id} - ${t.equip}</span>
            <span class="text-red-500 font-bold bg-red-50 px-1.5 py-0.5 rounded text-[9px] uppercase">Alta</span>
        </div>
    `).join("");

    // Lista Sin Responsable
    const sinRespList = document.getElementById('card-sin-resp-list');
    sinRespList.innerHTML = `
        <div class="flex justify-between items-center text-xs">
            <span class="text-slate-600 font-medium truncate max-w-[150px]" title="PC-ESCR-18 - Escritorio Contabilidad">PC-ESCR-18 - Contabilidad</span>
        </div>
        <div class="flex justify-between items-center text-xs">
            <span class="text-slate-600 font-medium truncate max-w-[150px]" title="NB-DEV-07 - Notebook Desarrollo">NB-DEV-07 - Desarrollo</span>
        </div>
        <div class="flex justify-between items-center text-xs">
            <span class="text-slate-600 font-medium truncate max-w-[150px]" title="UPS-SALA-02 - UPS Sala de Rack">UPS-SALA-02 - Sala de Rack</span>
            <span class="text-blue-500 font-bold bg-blue-50 px-1.5 py-0.5 rounded text-[9px]">+1 más</span>
        </div>
    `;
}

// RENDERIZADO DEL TABLERO KANBAN
function renderKanban() {
    const cols = {
        'Pendiente': document.getElementById('col-pendiente'),
        'En proceso': document.getElementById('col-proceso'),
        'En revisión': document.getElementById('col-observado'),
        'Cerrado': document.getElementById('col-cerrado')
    };

    if (!cols.Pendiente) return;

    // Limpiar columnas
    Object.values(cols).forEach(col => col.innerHTML = '');

    const counts = {
        'Pendiente': 0,
        'En proceso': 0,
        'En revisión': 0,
        'Cerrado': 0
    };

    // Aplicar filtros a la lista de tareas en memoria
    const filteredTasks = state.tasks.filter(task => {
        if (state.activeFilters.priority !== 'Todas' && task.prio !== state.activeFilters.priority) return false;
        if (state.activeFilters.responsible !== 'Todos' && task.resp !== state.activeFilters.responsible) return false;
        if (state.activeFilters.equipment && !task.equip.toLowerCase().includes(state.activeFilters.equipment.toLowerCase())) return false;
        if (state.activeFilters.onlyMyTasks && task.resp !== 'Juan Pérez') return false;
        if (state.activeFilters.searchQuery) {
            const q = state.activeFilters.searchQuery.toLowerCase();
            const match = task.id.toLowerCase().includes(q) ||
                task.equip.toLowerCase().includes(q) ||
                task.desc.toLowerCase().includes(q) ||
                task.resp.toLowerCase().includes(q);
            if (!match) return false;
        }
        if (state.activeFilters.due !== 'Todos') {
            const today = new Date();
            const taskDate = new Date(task.date);
            if (state.activeFilters.due === 'Vencidos' && taskDate >= today) return false;
            if (state.activeFilters.due === 'Proximos') {
                const nextWeek = new Date(today);
                nextWeek.setDate(today.getDate() + 7);
                if (taskDate < today || taskDate > nextWeek) return false;
            }
        }
        return true;
    });

    filteredTasks.forEach(task => {
        counts[task.status]++;

        // Badges de prioridad
        let prioBadge = '';
        if (task.prio === 'Alta') {
            prioBadge = `<span class="bg-red-50 text-red-500 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase">Alta</span>`;
        } else if (task.prio === 'Media') {
            prioBadge = `<span class="bg-amber-50 text-amber-500 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase">Media</span>`;
        } else {
            prioBadge = `<span class="bg-green-50 text-green-500 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase">Baja</span>`;
        }

        // Badges de estado específicos
        let statusBadge = '';
        if (task.status === 'En proceso') {
            statusBadge = `<span class="text-[9px] font-bold text-blue-600 bg-blue-50/80 px-1.5 py-0.5 rounded">En proceso</span>`;
        } else if (task.status === 'En revisión') {
            statusBadge = `<span class="text-[9px] font-bold text-red-600 bg-red-50/80 px-1.5 py-0.5 rounded">En revisión</span>`;
        } else if (task.status === 'Cerrado') {
            statusBadge = `<span class="text-[9px] font-bold text-emerald-600 bg-emerald-50/80 px-1.5 py-0.5 rounded">Cerrado</span>`;
        }

        // Formateo de fecha DD/MM/AAAA
        const dateParts = task.date.split('-');
        const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : task.date;

        // Construcción de la fecha con icono
        const isUrgentDate = task.prio === 'Alta' || task.status === 'Pendiente';
        const dateColorClass = isUrgentDate ? 'text-red-500 font-semibold' : 'text-slate-400 font-medium';
        const dateIconClass = isUrgentDate ? 'text-red-400' : 'text-slate-400';

        const dateHtml = `
            <span class="text-[10px] ${dateColorClass} flex items-center gap-1">
                <i data-lucide="calendar" class="w-3.5 h-3.5 ${dateIconClass}"></i>
                <span>${formattedDate}</span>
            </span>
        `;

        // Footer dinámico de la tarjeta
        let footerHtml = '';
        if (task.status === 'Pendiente') {
            footerHtml = `
                <div class="flex items-center justify-between mt-3.5 border-t border-slate-100 pt-2.5">
                    ${dateHtml}
                    ${prioBadge}
                </div>
            `;
        } else if (task.status === 'En proceso' || task.status === 'En revisión') {
            footerHtml = `
                <div class="flex items-center justify-between mt-3.5 border-t border-slate-100 pt-2.5">
                    ${statusBadge}
                    ${prioBadge}
                </div>
            `;
        } else if (task.status === 'Cerrado') {
            footerHtml = `
                <div class="flex items-center justify-between mt-3.5 border-t border-slate-100 pt-2.5">
                    ${statusBadge}
                    <span class="text-[10px] text-slate-400 font-medium">${formattedDate}</span>
                    ${prioBadge}
                </div>
            `;
        }

        const card = document.createElement('div');
        card.id = `card-${task.id}`;
        card.className = `bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md cursor-grab transition-all hover:border-slate-300 relative group`;
        card.draggable = true;
        card.addEventListener('dragstart', (e) => handleDragStart(e, task.id));
        card.addEventListener('dragend', handleDragEnd);
        card.onclick = () => openEditTaskModal(task);

        card.innerHTML = `
            <div class="flex items-start justify-between">
                <span class="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">${task.id} · ${task.equip}</span>
                <div class="flex gap-1.5 items-center">
                    <button onclick="deleteTask(event, '${task.id}')" class="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 transition-all rounded-lg hover:bg-red-50 min-w-[28px] min-h-[28px] flex items-center justify-center" title="Eliminar tarea">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
            
            <h4 class="text-xs font-bold text-slate-800 mt-1.5 line-clamp-2 leading-snug" title="${task.desc}">${task.desc}</h4>
            <p class="text-[10px] text-slate-500 mt-1">${task.resp}</p>

            ${footerHtml}
        `;

        cols[task.status].appendChild(card);
    });

    // Actualizar contadores
    document.getElementById('count-pendiente').textContent = counts['Pendiente'];
    document.getElementById('count-proceso').textContent = counts['En proceso'];
    document.getElementById('count-observado').textContent = counts['En revisión'];
    document.getElementById('count-cerrado').textContent = counts['Cerrado'];

    // Estado vacío por columna
    const estadosColumnas = {
        'Pendiente': 'col-pendiente',
        'En proceso': 'col-proceso',
        'En revisión': 'col-observado',
        'Cerrado': 'col-cerrado'
    };
    Object.entries(estadosColumnas).forEach(([estado, colId]) => {
        const col = document.getElementById(colId);
        if (col && col.children.length === 0) {
            col.innerHTML = `
                <div class="flex flex-col items-center justify-center py-8 text-center opacity-50">
                    <i data-lucide="inbox" class="w-8 h-8 text-slate-300 mb-2"></i>
                    <p class="text-xs text-slate-400 font-medium">Sin tareas ${estado.toLowerCase()}</p>
                </div>
            `;
        }
    });
    lucide.createIcons();
}

// RENDERIZADO DEL CENTRO DE ACCIÓN DERECHO
function renderActionCenter() {
    const summaryContainer = document.getElementById('action-center-summary');
    if (!summaryContainer) return;

    // Resumen Urgente
    const stockCritico = (state.data.alertas || []).filter(a => a.tipo === "Stock critico").length;
    const tareasVencidas = state.tasks.filter(t => t.status !== 'Cerrado' && new Date(t.date) < new Date()).length;
    const maintUrgente = state.tasks.filter(t => t.status !== 'Cerrado' && t.prio === 'Alta').length;

    summaryContainer.innerHTML = `
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" onclick="changeSidebarTab('inventario')">
            <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-[10px] font-bold">!</div>
                <span class="text-xs font-medium text-slate-700">Stock crítico</span>
            </div>
            <div class="flex items-center gap-1">
                <span class="text-xs font-bold text-slate-800">${stockCritico}</span>
                <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
            </div>
        </div>
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" onclick="filterByOverdue()">
            <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <i data-lucide="calendar-off" class="w-3 h-3"></i>
                </div>
                <span class="text-xs font-medium text-slate-700">Tareas vencidas</span>
            </div>
            <div class="flex items-center gap-1">
                <span class="text-xs font-bold text-slate-800">${tareasVencidas}</span>
                <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
            </div>
        </div>
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" onclick="filterByPriority('Alta')">
            <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <i data-lucide="alert-triangle" class="w-3 h-3"></i>
                </div>
                <span class="text-xs font-medium text-slate-700">Mantenimiento urgente</span>
            </div>
            <div class="flex items-center gap-1">
                <span class="text-xs font-bold text-slate-800">${maintUrgente}</span>
                <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
            </div>
        </div>
        <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" onclick="changeSidebarTab('equipos')">
            <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i data-lucide="user-x" class="w-3 h-3"></i>
                </div>
                <span class="text-xs font-medium text-slate-700">Equipos sin responsable</span>
            </div>
            <div class="flex items-center gap-1">
                <span class="text-xs font-bold text-slate-800">4</span>
                <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
            </div>
        </div>
    `;

    // Próximos Vencimientos
    const upcomingTasks = state.tasks
        .filter(t => t.status !== 'Cerrado')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    const dueListContainer = document.getElementById('action-center-due-list');
    dueListContainer.innerHTML = upcomingTasks.map(t => {
        const dateParts = t.date.split('-');
        const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : t.date;
        return `
            <div class="p-2 border-l-[3px] border-orange-500 bg-slate-50/50 hover:bg-slate-50 rounded-r-lg transition-all cursor-pointer text-left" onclick="highlightTask('${t.id}')">
                <div class="flex justify-between items-start">
                    <span class="text-[9px] font-bold text-slate-400">${t.id} - ${t.equip}</span>
                    <span class="text-[10px] font-bold text-red-500 bg-red-50 px-1 py-0.5 rounded">${formattedDate}</span>
                </div>
                <p class="text-[11px] font-medium text-slate-700 mt-1 truncate" title="${t.desc}">${t.desc}</p>
            </div>
        `;
    }).join("");
}

// RENDERIZADO DE TABLA DE INVENTARIO
function renderInventarioTable() {
    const tbody = document.getElementById('table-inventario-body');
    if (!tbody) return;

    tbody.innerHTML = (state.data.inventario || []).map(i => {
        let stockColor = 'text-slate-700 bg-slate-100';
        if (i.estado === 'Stock Critico') {
            stockColor = 'text-red-600 bg-red-50 font-bold';
        }

        let stateColor = 'text-slate-600 bg-slate-100';
        if (i.estado === 'Operacional') stateColor = 'text-green-600 bg-green-50 font-medium';
        if (i.estado === 'Observado') stateColor = 'text-amber-600 bg-amber-50 font-medium';

        return `
            <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 font-bold text-slate-800">${i.codigo}</td>
                <td class="p-4 text-slate-500 font-medium">${i.tipo}</td>
                <td class="p-4 text-slate-700">${i.categoria}</td>
                <td class="p-4">${i.marca || 'N/A'} ${i.modelo || ''}</td>
                <td class="p-4 text-slate-500">${i.serie || 'N/A'}</td>
                <td class="p-4 font-mono text-[11px]">${i.macPn || 'N/A'}</td>
                <td class="p-4 text-center"><span class="px-2 py-0.5 rounded text-[11px] ${stockColor}">${i.stock || '1/0'}</span></td>
                <td class="p-4 text-center"><span class="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider ${stateColor}">${i.estado}</span></td>
                <td class="p-4 text-slate-500">${i.ubicacion || 'Bodega'}</td>
            </tr>
        `;
    }).join("");

    if ((state.data.inventario || []).length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="p-8 text-center text-xs text-slate-400 font-medium">
            <div class="flex flex-col items-center gap-2">
                <i data-lucide="box" class="w-8 h-8 text-slate-300"></i>
                <span>No hay equipos registrados en el inventario</span>
            </div>
        </td></tr>`;
    }
}

// FILTRADO LOCAL DE LA TABLA DE INVENTARIO
function filterInventarioTable(onlyCritico = false) {
    const q = document.getElementById('inventario-search').value.toLowerCase();
    const tipo = document.getElementById('inventario-filter-tipo').value;
    const rows = document.querySelectorAll('#table-inventario-body tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const matchesSearch = text.includes(q);
        const matchesTipo = tipo === 'Todos' || text.includes(tipo.toLowerCase());
        const matchesCritico = !onlyCritico || text.includes('stock critico');

        if (matchesSearch && matchesTipo && matchesCritico) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });

    const visibles = document.querySelectorAll('#table-inventario-body tr:not(.hidden)');
    const tbody = document.getElementById('table-inventario-body');
    if (visibles.length === 0 && tbody) {
        const existing = tbody.querySelector('.empty-filter-msg');
        if (!existing) {
            const tr = document.createElement('tr');
            tr.className = 'empty-filter-msg';
            tr.innerHTML = `<td colspan="9" class="p-8 text-center text-xs text-slate-400 font-medium">
                <div class="flex flex-col items-center gap-2">
                    <i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i>
                    <span>Sin resultados para esta búsqueda</span>
                </div>
            </td>`;
            tbody.appendChild(tr);
            lucide.createIcons();
        }
    } else {
        const existing = tbody ? tbody.querySelector('.empty-filter-msg') : null;
        if (existing) existing.remove();
    }
}

// RENDERIZADO DE TABLA DE HISTORIAL
function renderServiciosTable() {
    const tbody = document.getElementById('table-servicios-body');
    if (!tbody) return;

    tbody.innerHTML = (state.data.historial || []).map(h => {
        let finalStateColor = 'text-green-600 bg-green-50';
        if (h.estado === 'Observado') finalStateColor = 'text-red-600 bg-red-50';
        return `
            <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 font-bold text-slate-800">${h.registro}</td>
                <td class="p-4 text-slate-500">${h.fecha}</td>
                <td class="p-4 font-semibold text-slate-700">${h.equipo}</td>
                <td class="p-4 text-slate-500">${h.serie || 'N/A'}</td>
                <td class="p-4 font-medium text-slate-600">${h.tipo}</td>
                <td class="p-4 text-slate-600 max-w-xs truncate" title="${h.detalle}">${h.detalle}</td>
                <td class="p-4 text-slate-500 font-medium">${h.repuestos || 'Ninguno'}</td>
                <td class="p-4 text-slate-600">${h.tecnico}</td>
                <td class="p-4 text-center"><span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold ${finalStateColor}">${h.estado}</span></td>
            </tr>
        `;
    }).join("");

    if ((state.data.historial || []).length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="p-8 text-center text-xs text-slate-400 font-medium">
            <div class="flex flex-col items-center gap-2">
                <i data-lucide="clipboard-list" class="w-8 h-8 text-slate-300"></i>
                <span>No hay mantenimientos registrados en el historial</span>
            </div>
        </td></tr>`;
    }
}

// FILTRADO LOCAL DE HISTORIAL
function filterServiciosTable() {
    const q = document.getElementById('servicios-search').value.toLowerCase();
    const rows = document.querySelectorAll('#table-servicios-body tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(q)) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });

    const visiblesServ = document.querySelectorAll('#table-servicios-body tr:not(.hidden)');
    const tbodyServ = document.getElementById('table-servicios-body');
    if (visiblesServ.length === 0 && tbodyServ) {
        const existing = tbodyServ.querySelector('.empty-filter-msg');
        if (!existing) {
            const tr = document.createElement('tr');
            tr.className = 'empty-filter-msg';
            tr.innerHTML = `<td colspan="9" class="p-8 text-center text-xs text-slate-400 font-medium">
                <div class="flex flex-col items-center gap-2">
                    <i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i>
                    <span>Sin resultados para esta búsqueda</span>
                </div>
            </td>`;
            tbodyServ.appendChild(tr);
            lucide.createIcons();
        }
    } else {
        const existing = tbodyServ ? tbodyServ.querySelector('.empty-filter-msg') : null;
        if (existing) existing.remove();
    }
}

// RENDERIZADO DE TABLA DE CRONOGRAMA
function renderCronogramaTable() {
    const tbody = document.getElementById('table-cronograma-body');
    if (!tbody) return;

    tbody.innerHTML = (state.data.cronograma || []).map(c => {
        let prioColor = 'text-slate-600 bg-slate-100';
        if (c.prioridad === 'Alta') prioColor = 'text-red-600 bg-red-50 font-bold';
        if (c.prioridad === 'Media') prioColor = 'text-amber-600 bg-amber-50 font-bold';

        let statusColor = 'text-slate-600 bg-slate-100';
        if (c.estado === 'Cerrado') statusColor = 'text-green-600 bg-green-50 font-medium';
        if (c.estado === 'En proceso') statusColor = 'text-blue-600 bg-blue-50 font-medium';
        if (c.estado === 'En revisión') statusColor = 'text-red-600 bg-red-50 font-medium';

        return `
            <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 font-bold text-slate-800">${c.tarea}</td>
                <td class="p-4 text-center font-medium text-slate-500">${c.semana}</td>
                <td class="p-4 text-center font-medium text-slate-700">${c.dia}</td>
                <td class="p-4 font-semibold text-slate-700">${c.activo}</td>
                <td class="p-4 text-slate-600 max-w-sm truncate" title="${c.descripcion}">${c.descripcion}</td>
                <td class="p-4 text-slate-600">${c.responsable}</td>
                <td class="p-4 text-center"><span class="px-2 py-0.5 rounded text-[10px] uppercase ${prioColor}">${c.prioridad}</span></td>
                <td class="p-4 text-center"><span class="px-2 py-0.5 rounded text-[10px] uppercase ${statusColor}">${c.estado}</span></td>
            </tr>
        `;
    }).join("");

    if ((state.data.cronograma || []).length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-8 text-center text-xs text-slate-400 font-medium">
            <div class="flex flex-col items-center gap-2">
                <i data-lucide="calendar" class="w-8 h-8 text-slate-300"></i>
                <span>No hay tareas programadas en el cronograma</span>
            </div>
        </td></tr>`;
    }
}

// RENDERIZADO DE CHECKLIST DE EQUIPOS
function renderChecklistTable() {
    const tbody = document.getElementById('table-checklist-body');
    if (!tbody) return;

    tbody.innerHTML = (state.data.checklist || []).map(ch => {
        const renderCheck = (val) => {
            if (val === 'Realizado' || val === '1' || val === true) {
                return `<span class="text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center justify-center gap-1 w-fit mx-auto"><i data-lucide="check" class="w-3 h-3"></i> OK</span>`;
            }
            if (val === 'No aplica') {
                return `<span class="text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full text-[10px] flex items-center justify-center gap-1 w-fit mx-auto">N/A</span>`;
            }
            return `<span class="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center justify-center gap-1 w-fit mx-auto"><i data-lucide="clock" class="w-3 h-3"></i> Pendiente</span>`;
        };

        return `
            <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 font-bold text-slate-800">${ch.equipo}</td>
                <td class="p-4 text-slate-500 font-medium">${ch.categoria || 'Equipo'}</td>
                <td class="p-4 text-center">${renderCheck(ch.limpieza)}</td>
                <td class="p-4 text-center">${renderCheck(ch.software)}</td>
                <td class="p-4 text-center">${renderCheck(ch.pasta)}</td>
                <td class="p-4 text-center">${renderCheck(ch.ups)}</td>
                <td class="p-4 text-center">${renderCheck(ch.discoRam)}</td>
                <td class="p-4 text-slate-500 max-w-xs truncate" title="${ch.observaciones || ''}">${ch.observaciones || 'Sin novedades'}</td>
            </tr>
        `;
    }).join("");

    if ((state.data.checklist || []).length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-8 text-center text-xs text-slate-400 font-medium">
            <div class="flex flex-col items-center gap-2">
                <i data-lucide="check-square" class="w-8 h-8 text-slate-300"></i>
                <span>No hay checklists registrados</span>
            </div>
        </td></tr>`;
    }
}

// RENDERIZADO DE LA PESTAÑA AJUSTES/CONFIG (PROCEDIMIENTOS Y ACTUALIZACIONES)
function renderConfigView() {
    // Procedimientos
    const procContainer = document.getElementById('config-procedimientos-container');
    if (procContainer) {
        procContainer.innerHTML = (state.data.procedimientos || []).map(p => `
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200/60 hover:bg-slate-100/50 transition-colors">
                <div class="flex justify-between items-center pb-2 border-b border-slate-200/50">
                    <span class="text-xs font-bold text-blue-950 uppercase tracking-wider">${p.tipo}</span>
                    <span class="text-[9px] font-bold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">Plantilla</span>
                </div>
                <p class="text-xs text-slate-600 font-medium leading-relaxed mt-2.5">${p.actividades}</p>
                ${p.nota ? `<p class="text-[10px] text-slate-400 font-semibold italic mt-2">Nota: ${p.nota}</p>` : ''}
            </div>
        `).join("");
    }

    // Actualizaciones
    const actTbody = document.getElementById('table-actualizaciones-body');
    if (actTbody) {
        actTbody.innerHTML = (state.data.actualizaciones || []).map(a => {
            let resColor = 'text-green-600 bg-green-50 font-bold';
            if (a.resultado === 'Observado') resColor = 'text-red-600 bg-red-50 font-bold';
            if (a.resultado === 'Pendiente') resColor = 'text-amber-600 bg-amber-50 font-bold';

            return `
                <tr class="hover:bg-slate-50/80 transition-colors text-[11px]">
                    <td class="p-3 font-semibold text-slate-700">${a.equipo}</td>
                    <td class="p-3 text-slate-600 font-medium">${a.software}</td>
                    <td class="p-3 text-slate-500">${a.anterior}</td>
                    <td class="p-3 text-slate-900 font-bold">${a.nueva}</td>
                    <td class="p-3 text-slate-500">${a.fecha}</td>
                    <td class="p-3 text-slate-500">${a.responsable}</td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 rounded-full text-[9px] uppercase ${resColor}">${a.resultado}</span></td>
                </tr>
            `;
        }).join("");
    }
}

// RENDERIZADO DEL PANEL DE REPORTES Y ANALÍTICA
function renderReportes() {
    const closed = state.tasks.filter(t => t.status === 'Cerrado').length;
    const total = state.tasks.length;
    const efficiency = total > 0 ? ((closed / total) * 100).toFixed(1) : "0.0";

    const warnings = (state.data.alertas || []).length;
    const totalMaint = (state.data.historial || []).length;

    // Actualizar KPIs
    const efficiencyEl = document.getElementById('kpi-efficiency');
    const warningsEl = document.getElementById('kpi-warnings');
    const totalMaintEl = document.getElementById('kpi-total-maint');

    if (efficiencyEl) efficiencyEl.textContent = `${efficiency}%`;
    if (warningsEl) warningsEl.textContent = warnings;
    if (totalMaintEl) totalMaintEl.textContent = totalMaint;

    // Reporte Categorías
    const categoriesContainer = document.getElementById('report-categories-container');
    if (categoriesContainer) {
        const counts = {};
        (state.data.inventario || []).forEach(i => {
            counts[i.categoria] = (counts[i.categoria] || 0) + 1;
        });

        categoriesContainer.innerHTML = Object.entries(counts).map(([cat, val]) => `
            <div>
                <div class="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1">
                    <span>${cat}</span>
                    <span>${val} unidades</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                    <div class="bg-blue-900 h-2 rounded-full" style="width: ${Math.min((val / 10) * 100, 100)}%"></div>
                </div>
            </div>
        `).join("");
    }

    // Reporte Técnico
    const techContainer = document.getElementById('report-tech-container');
    if (techContainer) {
        const counts = {};
        state.tasks.filter(t => t.status === 'Cerrado').forEach(t => {
            counts[t.resp] = (counts[t.resp] || 0) + 1;
        });

        techContainer.innerHTML = Object.entries(counts).map(([tech, val]) => `
            <div>
                <div class="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1">
                    <span>${tech}</span>
                    <span>${val} tareas</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style="width: ${Math.min((val / 8) * 100, 100)}%"></div>
                </div>
            </div>
        `).join("");
    }
}

function checkDateWarning(dateValue) {
    const warning = document.getElementById('date-warning');
    if (!warning || !dateValue) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(dateValue);
    if (selected < today) {
        warning.classList.remove('hidden');
    } else {
        warning.classList.add('hidden');
    }
}

// CONTROL DE MODALES - TAREA
function openAddTaskModal(status = 'Pendiente') {
    document.getElementById('modal-title').textContent = 'Agregar Nueva Tarea';
    document.getElementById('task-form').reset();
    document.getElementById('task-id').value = '';
    document.getElementById('task-status').value = status;

    // Auto-generar fecha límite para hoy
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('task-date').value = today;

    document.getElementById('modal-task').classList.remove('hidden');
}

function openEditTaskModal(task) {
    document.getElementById('modal-title').textContent = 'Editar Detalles de Tarea';
    document.getElementById('task-id').value = task.id;
    document.getElementById('task-equip').value = task.equip === 'Sin equipo' ? '' : task.equip;
    document.getElementById('task-desc').value = task.desc;
    document.getElementById('task-resp').value = task.resp;
    document.getElementById('task-status').value = task.status;
    document.getElementById('task-prio').value = task.prio;
    document.getElementById('task-date').value = task.date;
    document.getElementById('modal-task').classList.remove('hidden');
}

function closeAddTaskModal() {
    document.querySelectorAll('#task-form .field-error').forEach(el => el.remove());
    document.querySelectorAll('#task-form .border-red-400').forEach(el => el.classList.remove('border-red-400'));
    const warning = document.getElementById('date-warning');
    if (warning) warning.classList.add('hidden');
    document.getElementById('modal-task').classList.add('hidden');
}

function saveTask(event) {
    event.preventDefault();

    const idInput = document.getElementById('task-id').value;
    const equipInput = document.getElementById('task-equip').value.trim();
    const desc = document.getElementById('task-desc').value.trim();
    const resp = document.getElementById('task-resp').value;
    const status = document.getElementById('task-status').value;
    const prio = document.getElementById('task-prio').value;
    const date = document.getElementById('task-date').value;

    // Limpiar errores previos
    ['task-desc', 'task-date'].forEach(fieldId => {
        const el = document.getElementById(fieldId);
        el.classList.remove('border-red-400');
        const prev = el.parentElement.querySelector('.field-error');
        if (prev) prev.remove();
    });

    let hasError = false;

    if (!desc) {
        const el = document.getElementById('task-desc');
        el.classList.add('border-red-400');
        const msg = document.createElement('p');
        msg.className = 'field-error text-[10px] text-red-500 mt-1';
        msg.textContent = 'La descripción es obligatoria.';
        el.parentElement.appendChild(msg);
        hasError = true;
    }

    if (!date) {
        const el = document.getElementById('task-date');
        el.classList.add('border-red-400');
        const msg = document.createElement('p');
        msg.className = 'field-error text-[10px] text-red-500 mt-1';
        msg.textContent = 'La fecha límite es obligatoria.';
        el.parentElement.appendChild(msg);
        hasError = true;
    }

    if (hasError) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(date);
    if (taskDate < today) {
        showToast('Advertencia', 'La fecha límite ingresada ya está vencida.', 'warning');
    }

    let id = idInput;
    let equip = equipInput || 'Sin equipo';

    if (!idInput || idInput.trim() === '') {
        const nextNum = state.tasks.length + 1;
        id = `T${String(nextNum).padStart(3, '0')}`;
        const duplicate = state.tasks.find(t => t.id === id);
        if (duplicate) {
            id = `T${String(state.tasks.length + 2).padStart(3, '0')}`;
        }
    }

    const taskData = { id, equip, desc, resp, status, prio, date };

    if (idInput) {
        const index = state.tasks.findIndex(t => t.id === idInput);
        if (index !== -1) {
            state.tasks[index] = taskData;
            showToast('Tarea actualizada', `La tarea ${id} se guardó correctamente.`, 'success');
        }
    } else {
        state.tasks.push(taskData);
        showToast('Tarea creada', `Nueva tarea ${id} añadida a ${status}.`, 'success');
    }

    closeAddTaskModal();
    renderKanban();
    renderActionCenter();
    renderReportes();
}

// DRAG & DROP KANBAN
let dragState = { taskId: null, targetStatus: null };

function handleDragStart(e, taskId) {
    dragState.taskId = taskId;
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => {
        const card = document.getElementById(`card-${taskId}`);
        if (card) card.classList.add('opacity-50', 'scale-95');
    }, 0);
}

function handleDragEnd(e) {
    const card = document.getElementById(`card-${dragState.taskId}`);
    if (card) card.classList.remove('opacity-50', 'scale-95');
    document.querySelectorAll('[id^="dropzone-"]').forEach(zone => {
        zone.classList.remove('bg-blue-50', 'border-2', 'border-blue-300', 'border-dashed');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const zone = e.currentTarget;
    zone.classList.add('bg-blue-50', 'border-2', 'border-blue-300', 'border-dashed');
}

function handleDrop(e, targetStatus) {
    e.preventDefault();
    const zone = e.currentTarget;
    zone.classList.remove('bg-blue-50', 'border-2', 'border-blue-300', 'border-dashed');

    if (!dragState.taskId) return;

    const task = state.tasks.find(t => t.id === dragState.taskId);
    if (!task || task.status === targetStatus) return;

    dragState.targetStatus = targetStatus;

    const msg = document.getElementById('confirm-status-msg');
    if (msg) {
        msg.textContent = `¿Marcar la tarea ${task.id} — "${task.desc}" como "${targetStatus}"?`;
    }

    document.getElementById('modal-confirm-status').classList.remove('hidden');
}

function confirmDragDrop() {
    if (!dragState.taskId || !dragState.targetStatus) return;
    quickChangeStatus(dragState.taskId, dragState.targetStatus);
    document.getElementById('modal-confirm-status').classList.add('hidden');
    dragState = { taskId: null, targetStatus: null };
}

function cancelDragDrop() {
    document.getElementById('modal-confirm-status').classList.add('hidden');
    dragState = { taskId: null, targetStatus: null };
    renderKanban();
}

function quickChangeStatus(taskId, newStatus) {
    const index = state.tasks.findIndex(t => t.id === taskId);
    if (index === -1) return;
    state.tasks[index].status = newStatus;
    renderKanban();
    renderActionCenter();
    renderReportes();
    showToast('Estado actualizado', `Tarea ${taskId} movida a "${newStatus}".`, 'success');
}

function deleteTask(event, id) {
    event.stopPropagation();
    const confirmed = confirm(`¿Eliminar la tarea ${id}? Esta acción no se puede deshacer.`);
    if (!confirmed) return;
    state.tasks = state.tasks.filter(t => t.id !== id);
    renderKanban();
    renderActionCenter();
    renderReportes();
    showToast('Tarea eliminada', `La tarea ${id} fue eliminada del panel.`, 'warning');
}

// CONTROL DE MODALES - SERVICIO
function openNewServiceModal() {
    document.getElementById('modal-service').classList.remove('hidden');
}

function closeNewServiceModal() {
    document.getElementById('modal-service').classList.add('hidden');
}

function createService() {
    const name = document.getElementById('serv-name').value;
    const category = document.getElementById('serv-category').value;
    const desc = document.getElementById('serv-desc').value;
    if (!name) {
        showToast('Atención', 'Por favor ingresa un nombre para el servicio.', 'warning');
        return;
    }

    // Agregar registro local al historial simulado
    const newReg = `MNT-${1000 + (state.data.historial || []).length + 1}`;
    const todayStr = new Date().toISOString().split('T')[0];

    if (!state.data.historial) state.data.historial = [];
    state.data.historial.unshift({
        registro: newReg,
        fecha: todayStr,
        equipo: "N/A",
        serie: "N/A",
        tipo: category,
        detalle: name + ": " + desc,
        repuestos: "Ninguno",
        tecnico: "Juan Pérez",
        estado: "Operacional"
    });

    showToast('Servicio Creado', `Se ha inicializado con éxito: "${name}" en la categoría ${category}.`, 'success');
    closeNewServiceModal();

    // Refrescar vistas afectadas
    renderServiciosTable();
    renderReportes();
}

// CONTROL DE MODALES - NOTIFICACIONES
function showNotificationsModal() {
    const tbody = document.getElementById('modal-notifications-body');
    if (!tbody) return;

    const unreadCount = state.notifications.filter(n => !n.leido).length;
    document.getElementById('modal-notifications-title').textContent = `Notificaciones Recientes (${unreadCount})`;

    if (state.notifications.length === 0) {
        tbody.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">Sin notificaciones de alertas de la base de datos.</p>`;
    } else {
        tbody.innerHTML = state.notifications.map(n => {
            const bgClass = n.leido ? 'bg-slate-50 border-slate-200' :
                n.prioridad === 'Alta' ? 'bg-red-50 border-red-500' : 'bg-amber-50 border-amber-500';
            const textClass = n.leido ? 'text-slate-600' :
                n.prioridad === 'Alta' ? 'text-red-700' : 'text-amber-700';
            const titleClass = n.leido ? 'text-slate-800' :
                n.prioridad === 'Alta' ? 'text-red-800' : 'text-amber-800';

            return `
                <div class="p-3 border-l-4 rounded-r-lg ${bgClass} transition-all">
                    <div class="flex justify-between items-start">
                        <span class="text-xs font-bold ${titleClass}">Alerta: ${n.tipo} (${n.referencia})</span>
                        <span class="text-[10px] text-slate-400">${n.fecha}</span>
                    </div>
                    <p class="text-xs ${textClass} mt-1">${n.mensaje}</p>
                </div>
            `;
        }).join("");
    }

    document.getElementById('modal-notifications').classList.remove('hidden');
}

function closeNotificationsModal() {
    document.getElementById('modal-notifications').classList.add('hidden');
}

function markAllNotificationsAsRead() {
    state.notifications.forEach(n => {
        n.leido = true;
        if (!state.readNotifications.includes(n.id)) {
            state.readNotifications.push(n.id);
        }
    });
    updateNotificationBadge();
    showToast('Notificaciones', 'Todas las alertas marcadas como leídas', 'success');
    closeNotificationsModal();
}
