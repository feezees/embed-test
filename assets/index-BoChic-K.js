import { importShared } from './__federation_fn_import-DQAcblYo.js';
import App, { j as jsxRuntimeExports, G as GoogleOAuthProvider } from './__federation_expose_App-C40rO77e.js';
import { r as requireReactDom } from './index-tRApQIs1.js';

var client = {};

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;
	var m = requireReactDom();
	{
	  client.createRoot = m.createRoot;
	  client.hydrateRoot = m.hydrateRoot;
	}
	return client;
}

var clientExports = requireClient();

const {StrictMode} = await importShared('react');
const GOOGLE_CLIENT_ID = "399328388421-1i3q5o4vfes7n3tnttktsthr32pnr4nf.apps.googleusercontent.com";
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleOAuthProvider, { clientId: GOOGLE_CLIENT_ID, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
