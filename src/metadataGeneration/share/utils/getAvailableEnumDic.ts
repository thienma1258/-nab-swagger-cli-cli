type EnumKey = string;
type EnumValue = string;


export const getAvailableEnumDict = (
  (enums: Record<EnumKey, EnumValue>) => Object.values(enums).reduce<Record<EnumValue, boolean>>(
    (pre, enumValue) => {
      // eslint-disable-next-line no-param-reassign
      pre[enumValue] = true;
      return pre;
    },
    {},
  )
);
