#include <node_api.h>
#include <assert.h> 
#include <v8.h>


using v8::Local;
using v8::Context;

napi_value setEval(napi_env env, const napi_callback_info info) {
  napi_status status;
  size_t argc = 1;
  napi_value args[1];
  int number = 0;

  status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
  assert(status == napi_ok);

  status = napi_get_value_int32(env, args[0], &number);
  assert(status == napi_ok);

  if(number > 0){
    Local<Context> ctx = v8::Isolate::GetCurrent()->GetEnteredContext();
    ctx->AllowCodeGenerationFromStrings(true);
  }else{
    Local<Context> ctx = v8::Isolate::GetCurrent()->GetEnteredContext();
    ctx->AllowCodeGenerationFromStrings(false);
  }
  
  napi_value myVal;
  status = napi_create_int32(env, 1,  &myVal);
  assert(status == napi_ok);
  return myVal;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_value new_exports;
  napi_status status =
      napi_create_function(env, "", NAPI_AUTO_LENGTH, setEval, nullptr, &new_exports);
  assert(status == napi_ok);
  return new_exports;
}


NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)