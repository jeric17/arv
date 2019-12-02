export const plusSign = '+++plus+++';
export const minusSign = '---minus---';
export const divider = '|||divider|||';

function getNextOccurence(oRemaining, nRemaining, i) {
  let target = -1;
  oRemaining.forEach(d => {
    const find = nRemaining.indexOf(d);
    if (find > -1 && target === -1) {
      target = find;
      return false;
    }
  });
  if (target > -1) {
    return target + i;
  }
  return target;
}

export function diff(o: string, n: string) {
  const oArray = o.split('\n');
  const nArray = n.split('\n');
  const indexes = [];

  // let lastSameIndex = null;
  let oIndex = 0;

  let stringArray = [];
  let streakCount = 0;
  let startIndex = [];
  let nextOccurence = -1;
  let firstSame = true;

  nArray.forEach((d: string, i: number) => {
    const oItem = oArray[oIndex];
    const oRemaining = oArray.slice(oIndex + 1);
    const nRemaining = nArray.slice(i + 1);
    const sameRemaining = (() => {
      const oString = oRemaining.join('');
      const nString = nRemaining.join('');

      return oString === nString;
    })();

    if (sameRemaining) {
      streakCount = 0;
      oIndex += 1;
      nextOccurence = -1;

      if (firstSame) {
        stringArray.push(`${minusSign}${oItem}${divider}${i}_${oIndex}`);
        stringArray.push(`${plusSign}${d}${divider}${i}_${oIndex}`);
        firstSame = false;
        return false;
      }
      stringArray.push(`${d}${divider}${i}_${oIndex}`);
      return false;
    }

    if (d !== oItem && nextOccurence === -1) {
      nextOccurence = getNextOccurence(oRemaining, nRemaining, i);
      // console.log('nextOccurence', nextOccurence, d);
      const currentOIndex = oRemaining.indexOf(d);
      const validNextOIndex = (currentOIndex > - 1) ? (currentOIndex + i + 1) : -1;
      // console.log(currentOIndex, d, 'ITEM: ', oItem, validNextOIndex);

      if (
        validNextOIndex > i
      ) {
        if (oItem) {
          stringArray.push(`${minusSign}${oItem}${divider}${i}_${oIndex}`);
          indexes.push([i, oIndex, stringArray.length]);
        }

        oRemaining.slice(0, currentOIndex).forEach((dd) => {
          if (dd) {
            stringArray.push(`${minusSign}${dd}${divider}${i}_${oIndex}`);
            indexes.push([i, oIndex, stringArray.length]);
          }
        });

        stringArray.push(`${oArray[validNextOIndex]}${divider}${i}_${oIndex}`);
        indexes.push([i, oIndex, stringArray.length]);

        oIndex = validNextOIndex + 1;
        streakCount = 0;
      } else {
        let hasStreak = false;
        if (oItem) {
          hasStreak = true;
          // console.log('OITEM', oItem, validNextOIndex);
          stringArray.push(`${minusSign}${oItem}${divider}${i}_${oIndex}`);
          indexes.push([i, oIndex, stringArray.length]);
        }
        if (hasStreak && streakCount === 0) {
          startIndex = [i, oIndex, stringArray.length - 1];
        }
        if (hasStreak) {
          streakCount += 1;
        }
        stringArray.push(`${plusSign}${d}${divider}${i}_${oIndex}`);
        indexes.push([i, oIndex, stringArray.length]);

        oIndex += 1;
      }
      return false;
    }  else if (d !== oItem && nextOccurence === i) {
      // stringArray.push(`${minusSign}${oItem}${divider}${i}_${oIndex}`);
      stringArray.push(`${plusSign}${d}${divider}${i}_${oIndex}`);
      // stringArray.push(`${nArray[i + 1]}${divider}${i}_${oIndex}`);

      nextOccurence = -1;
      streakCount = 0;
    } else if (d !== oItem) {
      stringArray.push(`${d}${divider}${i}_${oIndex}`);

      nextOccurence = -1;
      streakCount = 0;
      oIndex += 1;
    } else {
      // console.log('ELSE', d);
      nextOccurence = -1;
    }

    if (d === oItem) {
      if (streakCount > 1) {
        // console.log(startIndex, d, streakCount);
        // console.log('end: ', i, oIndex, stringArray.length);
        const targetContent = stringArray.slice(startIndex[2], stringArray.length);
        const minuses = targetContent.filter(d => d.indexOf(minusSign) > - 1);
        const pluses = targetContent.filter(d => d.indexOf(plusSign) > - 1);
        const newContent = minuses.concat(pluses);
        stringArray.splice(startIndex[2], stringArray.length, ...newContent);
      }
      streakCount = 0;
      startIndex = [];
      stringArray.push(`${d}${divider}${i}_${oIndex}`);
      indexes.push([i, oIndex, stringArray.length]);
      oIndex += 1;
      nextOccurence = -1;
      return false;
    }
  });
  const sameEnd = nArray[nArray.length] === oArray[oArray.length];
  const diffLength = oIndex < oArray.length;

  if (sameEnd && diffLength) {
    stringArray.pop();
  }
  if (oIndex < oArray.length) {
    const sliced = oArray.slice(oIndex - 1);
    const slicedLength = sliced.length - 1;
    sliced.forEach((d, i) => {
      if (sameEnd && diffLength && (slicedLength === i)) {
        stringArray.push(`${d}${divider}${nArray.length}_${oIndex + i}`);
        return false;
      }  
      stringArray.push(`${minusSign}${d}${divider}${nArray.length}_${oIndex + i}`);
    });
  }

  // console.log(oIndex, oArray.length);  

  const parsedData = stringArray.map(data => {
    const plus = data.indexOf(plusSign) > -1;
    const minus = data.indexOf(minusSign) > -1;
    const [stringData, div] = data.split(divider);

    return {
      plus,
      minus,
      data: stringData.replace(plusSign, '').replace(minusSign, ''),
      indexes: div.split('_')
    };
  });

  return {
    stringArray: parsedData,
    indexes,  
  };  
}
