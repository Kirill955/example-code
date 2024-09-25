import forge from "node-forge";

type Link = {
  link: string;
  type: string;
};

const getFileMD5Hash = async (file: Blob): Promise<string> => {
  const arrBuff = await file.arrayBuffer();

  const binaryStr = new Uint8Array(arrBuff).reduce(
    (data, byte) => data + String.fromCharCode(byte),
    ""
  );

  const md5 = forge.md.md5.create();

  md5.update(binaryStr);

  return md5.digest().toHex();
};

const getDocument = async (link: string, onError: () => void) => {
  try {
    const res = await fetch(link);
    const resBlob = await res.blob();

    const hash = await getFileMD5Hash(resBlob);

    return hash;
  } catch (e) {
    onError();

    throw new Error(e as string);
  }
};

type Args = {
  links: Array<Link>;
  onError: () => void;
};

export const getHashesDocuments = async ({ links, onError }: Args) => {
  return links.reduce(
    async (acc: Promise<Array<{ hash: string; type: string }>>, item) => {
      const { link, type } = item;

      const hashArray: Array<{ hash: string; type: string }> = await acc;

      const hash: string = await getDocument(link, onError);

      hashArray.push({ hash, type });

      return hashArray;
    },

    Promise.resolve([])
  );
};
