const demoData = {
  alertas: [
    { tipo: "Stock critico", prioridad: "Alta", referencia: "RAM-008", mensaje: "Memoria RAM bajo minimo: 1/2" },
    { tipo: "Stock critico", prioridad: "Alta", referencia: "ALM-002", mensaje: "SSD bajo minimo: 2/2" },
    { tipo: "Equipo observado", prioridad: "Media", referencia: "MNT-1003", mensaje: "SRV-ADM-01 quedo observado tras mantenimiento" },
    { tipo: "Tarea pendiente", prioridad: "Alta", referencia: "T002", mensaje: "UPS: test de baterias y limpieza externa" }
  ],
  tareas: [
    {
      id: "T001",
      estado: "En proceso",
      activo: "SRV-ADM-01",
      titulo: "Mantenimiento preventivo servidor",
      prioridad: "Alta",
      responsable: "Tecnico TI",
      fecha: "2026-05-22",
      detalle: "Revision de logs, backups y temperatura. Validar alerta de bahia de discos."
    },
    {
      id: "T002",
      estado: "Pendiente",
      activo: "UPS-01",
      titulo: "Test de baterias UPS",
      prioridad: "Alta",
      responsable: "Tecnico TI",
      fecha: "2026-05-22",
      detalle: "Ejecutar runtime test y registrar resultado en checklist."
    },
    {
      id: "T003",
      estado: "Pendiente",
      activo: "SW-01",
      titulo: "Limpieza de puertos",
      prioridad: "Media",
      responsable: "Tecnico TI",
      fecha: "2026-05-23",
      detalle: "Revisar loops de red y temperatura de operacion."
    },
    {
      id: "T004",
      estado: "Observado",
      activo: "PC-MP-001",
      titulo: "Limpieza interna y actualizacion",
      prioridad: "Media",
      responsable: "Soporte",
      fecha: "2026-05-24",
      detalle: "Equipo requiere seguimiento por exceso de polvo recurrente."
    },
    {
      id: "T005",
      estado: "Cerrado",
      activo: "NTB-MP-001",
      titulo: "Cambio SSD y validacion",
      prioridad: "Media",
      responsable: "Pedro Soto",
      fecha: "2026-05-20",
      detalle: "SSD reemplazado. Equipo queda operativo."
    }
  ],
  inventario: [
    { codigo: "PC-MP-001", tipo: "Equipo", categoria: "Torre Escritorio", marca: "HP", modelo: "ProDesk 600 G6", serie: "MXL1234567", macPn: "00:1A:2B:3C:4D:5E", stock: "1/0", estado: "Operacional", ubicacion: "Oficina Central" },
    { codigo: "NTB-MP-001", tipo: "Equipo", categoria: "Notebook", marca: "Lenovo", modelo: "ThinkPad L14", serie: "PF2A3B4C", macPn: "00:1A:2B:3C:4D:5F", stock: "1/0", estado: "Operacional", ubicacion: "Terreno Ventas" },
    { codigo: "SRV-ADM-01", tipo: "Equipo", categoria: "Servidor", marca: "Dell", modelo: "PowerEdge T140", serie: "DL-SRV-991", macPn: "00:1A:2B:3C:4D:60", stock: "1/0", estado: "Observado", ubicacion: "Sala TI" },
    { codigo: "RAM-008", tipo: "Componente", categoria: "Memoria RAM", marca: "Kingston", modelo: "DDR4", serie: "RAMDDR4-008", macPn: "KVR26N19S8/8", stock: "1/2", estado: "Stock Critico", ubicacion: "Bodega TI" }
  ],
  historial: [
    { registro: "MNT-1001", fecha: "2026-05-10", equipo: "PC-MP-001", serie: "MXL1234567", tipo: "Preventivo", detalle: "Soplado de polvo y cambio de pasta termica.", repuestos: "Pasta termica", tecnico: "Juan Perez", estado: "Operacional" },
    { registro: "MNT-1002", fecha: "2026-05-11", equipo: "NTB-MP-001", serie: "PF2A3B4C", tipo: "Correctivo", detalle: "Pantalla azul. Reemplazo SSD.", repuestos: "ALM-002", tecnico: "Pedro Soto", estado: "Operacional" },
    { registro: "MNT-1003", fecha: "2026-05-12", equipo: "SRV-ADM-01", serie: "DL-SRV-991", tipo: "Auditoria", detalle: "Alerta de temperatura en bahia de discos.", repuestos: "N/A", tecnico: "Camila Rojas", estado: "Observado" }
  ],
  cronograma: [
    { tarea: "T001", semana: 1, dia: "Lunes", activo: "Servidor Central", descripcion: "Mantenimiento preventivo", responsable: "Tecnico TI", prioridad: "Alta", estado: "En proceso" },
    { tarea: "T002", semana: 1, dia: "Lunes", activo: "UPS", descripcion: "Test de baterias", responsable: "Tecnico TI", prioridad: "Alta", estado: "Pendiente" },
    { tarea: "T003", semana: 1, dia: "Martes", activo: "Switch de Red", descripcion: "Limpieza de puertos", responsable: "Tecnico TI", prioridad: "Media", estado: "Pendiente" }
  ],
  checklist: [
    { equipo: "SERV-01", categoria: "Servidor", limpieza: "Pendiente", software: "Pendiente", pasta: "Pendiente", ups: "Pendiente", discoRam: "Pendiente", observaciones: "" },
    { equipo: "UPS-01", categoria: "UPS", limpieza: "Pendiente", software: "Pendiente", pasta: "No aplica", ups: "Pendiente", discoRam: "No aplica", observaciones: "" },
    { equipo: "PC-01", categoria: "Escritorio", limpieza: "Pendiente", software: "Pendiente", pasta: "Pendiente", ups: "No aplica", discoRam: "Pendiente", observaciones: "" }
  ],
  procedimientos: [
    { tipo: "Servidor", actividades: "Revision de logs, RAID, limpieza de bahias y parches de seguridad.", nota: "Sanity check" },
    { tipo: "Switch de Red", actividades: "Limpieza de puertos, temperatura y loops de red.", nota: "" },
    { tipo: "UPS", actividades: "Prueba de carga, limpieza de bornes y alertas de software.", nota: "" },
    { tipo: "Equipos PC/NB", actividades: "Soplado interno, limpieza, antivirus, SO y temperatura CPU.", nota: "" }
  ],
  actualizaciones: [
    { equipo: "PC-MP-001", software: "Windows Update", anterior: "22H2", nueva: "23H2", fecha: "2026-05-10", responsable: "Juan Perez", resultado: "Correcto" },
    { equipo: "NTB-MP-001", software: "Antivirus", anterior: "4.8.1", nueva: "4.9.0", fecha: "2026-05-11", responsable: "Pedro Soto", resultado: "Correcto" },
    { equipo: "SRV-ADM-01", software: "Parches de seguridad", anterior: "Abril 2026", nueva: "Mayo 2026", fecha: "2026-05-12", responsable: "Camila Rojas", resultado: "Observado" }
  ]
};

const state = {
  data: demoData,
  allCollapsed: false
};

async function loadData() {
  try {
    const response = await fetch("api/dashboard.php", { cache: "no-store" });
    if (!response.ok) throw new Error("API no disponible");
    state.data = await response.json();
  } catch (error) {
    state.data = demoData;
  }
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key] || "Sin estado";
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
}

function renderAlerts() {
  const container = document.querySelector("#alertStrip");
  const grouped = groupBy(state.data.alertas, "tipo");
  container.innerHTML = Object.entries(grouped)
    .map(([tipo, items]) => {
      const priority = items.some((item) => item.prioridad === "Alta") ? "Alta" : "Media";
      return `
        <article class="alert-chip" data-priority="${priority}">
          <div>
            <strong>${tipo}</strong>
            <span>${items[0].mensaje}</span>
          </div>
          <div class="alert-count">${items.length}</div>
        </article>
      `;
    })
    .join("");

  document.querySelector("#priorityAlerts").innerHTML = state.data.alertas
    .slice(0, 5)
    .map((alerta) => `
      <article class="priority-item ${alerta.prioridad}">
        <strong>${alerta.referencia} · ${alerta.tipo}</strong>
        <p>${alerta.mensaje}</p>
        <button class="link-button" type="button">Revisar</button>
      </article>
    `)
    .join("");
}

function renderKanban() {
  const statuses = ["Pendiente", "En proceso", "Observado", "Cerrado"];
  const grouped = groupBy(state.data.tareas, "estado");
  document.querySelector("#kanban").innerHTML = statuses
    .map((status) => {
      const items = grouped[status] || [];
      const highPriority = items.filter((item) => item.prioridad === "Alta").length;
      const collapsedClass = state.allCollapsed ? " is-collapsed" : "";
      return `
        <section class="kanban-section${collapsedClass}">
          <button class="kanban-toggle" type="button">
            <span>
              <strong>${status}</strong><br>
              <span>${highPriority ? `${highPriority} alta prioridad` : "Sin urgencias altas"}</span>
            </span>
            <span class="status-count">${items.length}</span>
            <span class="chevron">⌄</span>
          </button>
          <div class="kanban-cards">
            ${items.map(renderTaskCard).join("") || "<p class=\"view-note\">Sin tareas en este estado.</p>"}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderTaskCard(task) {
  return `
    <article class="task-card">
      <div class="task-card-header">
        <div>
          <div class="task-id">${task.id} · ${task.activo}</div>
          <div class="task-title">${task.titulo}</div>
          <div class="task-meta">
            <span>${task.responsable}</span>
            <span>${task.fecha}</span>
          </div>
        </div>
        <span class="badge ${task.prioridad}">${task.prioridad}</span>
      </div>
      <button class="details-toggle" type="button">Detalle</button>
      <div class="task-details">${task.detalle}</div>
    </article>
  `;
}

function renderSummary() {
  const data = state.data;
  const stockCritico = data.alertas.filter((item) => item.tipo === "Stock critico").length;
  const observados = data.alertas.filter((item) => item.tipo === "Equipo observado").length;
  const pendientes = data.tareas.filter((item) => item.estado !== "Cerrado").length;
  const activos = data.inventario.filter((item) => item.tipo === "Equipo").length;

  document.querySelector("#summaryRow").innerHTML = [
    ["Equipos", activos],
    ["Alertas stock", stockCritico],
    ["Tareas abiertas", pendientes],
    ["Observados", observados]
  ]
    .map(([label, value]) => `
      <article class="summary-card">
        <strong>${value}</strong>
        <span>${label}</span>
      </article>
    `)
    .join("");
}

function renderTable(id, headers, rows) {
  const table = document.querySelector(`#${id}`);
  table.innerHTML = `
    <thead>
      <tr>${headers.map((header) => `<th>${header.label}</th>`).join("")}</tr>
    </thead>
    <tbody>
      ${rows.map((row) => `
        <tr>${headers.map((header) => `<td>${row[header.key] ?? ""}</td>`).join("")}</tr>
      `).join("")}
    </tbody>
  `;
}

function renderTables() {
  renderTable("table-inventario", [
    { label: "Codigo", key: "codigo" },
    { label: "Tipo", key: "tipo" },
    { label: "Categoria", key: "categoria" },
    { label: "Marca", key: "marca" },
    { label: "Modelo", key: "modelo" },
    { label: "Serie", key: "serie" },
    { label: "MAC / P/N", key: "macPn" },
    { label: "Stock", key: "stock" },
    { label: "Estado", key: "estado" },
    { label: "Ubicacion", key: "ubicacion" }
  ], state.data.inventario);

  renderTable("table-historial", [
    { label: "Registro", key: "registro" },
    { label: "Fecha", key: "fecha" },
    { label: "Equipo", key: "equipo" },
    { label: "Serie", key: "serie" },
    { label: "Tipo", key: "tipo" },
    { label: "Detalle", key: "detalle" },
    { label: "Repuestos", key: "repuestos" },
    { label: "Tecnico", key: "tecnico" },
    { label: "Estado", key: "estado" }
  ], state.data.historial);

  renderTable("table-cronograma", [
    { label: "Tarea", key: "tarea" },
    { label: "Semana", key: "semana" },
    { label: "Dia", key: "dia" },
    { label: "Activo", key: "activo" },
    { label: "Descripcion", key: "descripcion" },
    { label: "Responsable", key: "responsable" },
    { label: "Prioridad", key: "prioridad" },
    { label: "Estado", key: "estado" }
  ], state.data.cronograma);

  renderTable("table-checklist", [
    { label: "Equipo", key: "equipo" },
    { label: "Categoria", key: "categoria" },
    { label: "Limpieza", key: "limpieza" },
    { label: "Software", key: "software" },
    { label: "Pasta", key: "pasta" },
    { label: "UPS", key: "ups" },
    { label: "Disco/RAM", key: "discoRam" },
    { label: "Observaciones", key: "observaciones" }
  ], state.data.checklist);

  renderTable("table-procedimientos", [
    { label: "Tipo activo", key: "tipo" },
    { label: "Actividades", key: "actividades" },
    { label: "Nota", key: "nota" }
  ], state.data.procedimientos);

  renderTable("table-actualizaciones", [
    { label: "Equipo", key: "equipo" },
    { label: "Software", key: "software" },
    { label: "Anterior", key: "anterior" },
    { label: "Nueva", key: "nueva" },
    { label: "Fecha", key: "fecha" },
    { label: "Responsable", key: "responsable" },
    { label: "Resultado", key: "resultado" }
  ], state.data.actualizaciones);
}

function bindEvents() {
  document.querySelector(".tabs").addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (!tab) return;
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`#view-${tab.dataset.view}`).classList.add("is-active");
  });

  document.querySelector("#kanban").addEventListener("click", (event) => {
    const toggle = event.target.closest(".kanban-toggle");
    const detailsToggle = event.target.closest(".details-toggle");
    if (toggle) {
      toggle.closest(".kanban-section").classList.toggle("is-collapsed");
    }
    if (detailsToggle) {
      detailsToggle.closest(".task-card").classList.toggle("is-open");
    }
  });

  document.querySelector("#toggleAll").addEventListener("click", () => {
    state.allCollapsed = !state.allCollapsed;
    document.querySelector("#toggleAll").textContent = state.allCollapsed ? "Desplegar todo" : "Plegar todo";
    renderKanban();
  });
}

async function init() {
  await loadData();
  renderAlerts();
  renderKanban();
  renderSummary();
  renderTables();
  bindEvents();
}

init();
