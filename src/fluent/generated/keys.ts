import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '9c4ec23759f545d28b90de80a184f572'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '8f1bee57079d4b5789c7e66eed00421a'
                    }
                }
            }
        }
    }
}
