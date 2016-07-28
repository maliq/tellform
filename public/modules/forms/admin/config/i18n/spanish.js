'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('es', {

		//Configure Form Tab View
		PDF_GENERATION_EMR: 'Generación de PDF/EMR',
		SAVE_PDF_SUBMISSIONS: '¿Guardar ingresos como PDFs?',
		UPLOAD_YOUR_PDF: 'Subir su propia plantilla PDF',
		ADVANCED_SETTINGS: 'Configuración Avanzada',
		FORM_NAME: 'Nombre del Formulario',
		FORM_STATUS: 'Estado del Formulario',
		PUBLIC: 'Público',
		PRIVATE: 'Privado',
		GA_TRACKING_CODE: 'Código de Google Analytics Tracking',
		DISPLAY_FOOTER: '¿Mostrar pie de pagina de Formulario?',
		SAVE_CHANGES: 'Guardar Cambios',
		CANCEL: 'Cancelar',

		//List Forms View
		CREATE_A_NEW_FORM: 'Crear un nuevo Formulario',
		CREATE_FORM: 'Crear Formulario',
		CREATED_ON: 'Creado en',

		//Admin Form View
		ARE_YOU_SURE: '¿Esta absolutamente seguro?',
		READ_WARNING: 'Cosas inesperadas sucederán si usted no lee esto',
		DELETE_WARNING1: 'Esta acción no se puede deshacer. Sera borrado permanentemente',
		DELETE_WARNING2: 'Formulario, envíos y borrar todos los PDFs asociados.',
		DELETE_CONFIRM: 'Por favor escriba el nombre del formulario para confirmar',
		I_UNDERSTAND: 'Entiendo las consecuencias, borrar este formulario',
		DELETE_FORM_SM: Borrar,
		DELETE_FORM_MD: 'Borrar Formulario',
		DELETE: 'Borrar',
		FORM: 'Formulario',
		VIEW: 'Ver',
		LIVE: 'En vivo',
		PREVIEW: 'Vista previa',

		//Edit Form View
		ADD_FIELD_LG: 'Haga click para Agregar Nuevo Campo',
		ADD_FIELD_MD: 'Agregar Nuevo Campo',
		ADD_FIELD_SM: 'Agregar Campo',
		PREVIEW_START_PAGE: 'Vista previa de la Pantalla de Bienvenida',
		EDIT_START_PAGE: 'Editar Pantalla de Bienvenida',
		WELCOME_SCREEN: 'Pantalla de Bienvenida',
		INTRO_TITLE: 'Titulo de Entrada',
		INTRO_PARAGRAPH: 'Párrafo de Entrada',
		INTRO_BTN: 'Botón de Entrada',
		BUTTONS: 'Botones',
		BUTTON_TEXT: 'Texto',
		BUTTON_LINK: 'Link',
		ADD_BUTTON: 'Agregar Botón',
		PREVIEW_FIELD: 'Vista previa del Campo',
		EDIT_FIELD: 'Editar Campo',
		QUESTION_TITLE: 'Titulo de la Pregunta',
		QUESTION_DESCRIPTION: 'Descripción de la Pregunta',
		OPTIONS: 'Opciones',
		ADD_OPTION: 'Agregar Opción',
		NUM_OF_STEPS: 'Número de pasos',
		CLICK_FIELDS_FOOTER: 'Haga Click en los campos para agregarlas aqui',

		//Edit Submissions View
		TOTAL_VIEWS: 'total visitas únicas',
		RESPONSES: 'responses',
		COMPLETION_RATE: 'Tasa de completitud',
		AVERAGE_TIME_TO_COMPLETE: 'Tiempo promedio de completar',

		DESKTOP_AND_LAPTOP: 'Computadores',
		TABLETS: 'Tablets',
		PHONES: 'Teléfonos',
		OTHER: 'Otros',
		UNIQUE_VISITS: 'Visitas Únicas',

		FIELD_TITLE: 'Titulo del Campo',
		FIELD_VIEWS: 'Vistas del Campo',
		FIELD_DROPOFF: 'Campo de Completitud',
		FIELD_RESPONSES: 'Field Responses',
		DELETE_SELECTED: 'Borrar Seleccionado',
		EXPORT_TO_EXCEL: 'Exporta a Excel',
		EXPORT_TO_CSV: 'Exportar a CSV',
		EXPORT_TO_JSON: 'Exportar a JSON',
		PERCENTAGE_COMPLETE: 'Porcentaje Completo',
		TIME_ELAPSED: 'Tiempo Transcurrido',
		DEVICE: 'Dispositivo',
		LOCATION: 'Localización',
		IP_ADDRESS: 'Dirección IP',
		DATE_SUBMITTED: 'Fecha de Ingreso',
		GENERATED_PDF: 'PDF Generado',

		//Design View
		BACKGROUND_COLOR: 'Color de Fondo',
		DESIGN_HEADER: 'Cambiar como tu Formulario se ve',
		QUESTION_TEXT_COLOR: 'Color del texto de la pregunta',
		ANSWER_TEXT_COLOR: 'Color del texto de la respuesta',
		BTN_BACKGROUND_COLOR: 'Color de Fondo del Botón',
		BTN_TEXT_COLOR: 'Color del Texto del Botón',

		//Admin Tabs
		CREATE_TAB: 'Crear',
		DESIGN_TAB: 'Diseño',
		CONFIGURE_TAB: 'Configuración',
		ANALYZE_TAB: 'Análisis'

	});
}]);

