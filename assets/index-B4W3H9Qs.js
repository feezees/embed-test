import { importShared } from './__federation_fn_import-DQAcblYo.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_App-D7qL4y76.js';
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

const React = await importShared('react');
const {useState,useRef,useEffect,createContext,useMemo,useContext,useCallback} = React;


function useLoadGsiScript(options = {}) {
    const { nonce, locale, onScriptLoadSuccess, onScriptLoadError } = options;
    const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = useState(false);
    const onScriptLoadSuccessRef = useRef(onScriptLoadSuccess);
    onScriptLoadSuccessRef.current = onScriptLoadSuccess;
    const onScriptLoadErrorRef = useRef(onScriptLoadError);
    onScriptLoadErrorRef.current = onScriptLoadError;
    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://accounts.google.com/gsi/client';
        if (locale)
            scriptTag.src += `?hl=${locale}`;
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.nonce = nonce;
        scriptTag.onload = () => {
            var _a;
            setScriptLoadedSuccessfully(true);
            (_a = onScriptLoadSuccessRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadSuccessRef);
        };
        scriptTag.onerror = () => {
            var _a;
            setScriptLoadedSuccessfully(false);
            (_a = onScriptLoadErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadErrorRef);
        };
        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, [nonce]);
    return scriptLoadedSuccessfully;
}

const GoogleOAuthContext = createContext(null);
function GoogleOAuthProvider({ clientId, nonce, locale, onScriptLoadSuccess, onScriptLoadError, children, }) {
    const scriptLoadedSuccessfully = useLoadGsiScript({
        nonce,
        onScriptLoadSuccess,
        onScriptLoadError,
        locale,
    });
    const contextValue = useMemo(() => ({
        locale,
        clientId,
        scriptLoadedSuccessfully,
    }), [clientId, scriptLoadedSuccessfully]);
    return (React.createElement(GoogleOAuthContext.Provider, { value: contextValue }, children));
}

const {StrictMode} = await importShared('react');
const GOOGLE_CLIENT_ID = "zxc";
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleOAuthProvider, { clientId: GOOGLE_CLIENT_ID, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
