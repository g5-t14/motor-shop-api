export default {
    coverageProvider: "v8",
    preset: "ts-jest",
    testMatch: [
        "**/__tests__/units/**/*.[jt]s?(x)", 
        "**/__tests__/integrations/**/*.[jt]s?(x)"
      ]
}