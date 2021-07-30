import { IAttachmentData } from 'gl-w-frontend/lib/scripts/core/services/attachment/core-services-attachment.interface';

export interface IDragAndDropVariables {
  descriptionDragAndDrop: string;
  descriptionDragAndDropOr: string;
  descriptionDragAndDropClickHere: string;

  invalidExtensionMessageSingular: string;
  invalidExtensionMessagePlural: string;
  duplicatedMessageSingular: string;
  duplicatedMessagePlural: string;

  invalidSizeMessageSingular: string;
  invalidSizeMessagePlural: string;

  invalidLengthMessageSingular: string;
  invalidLengthMessagePlural: string;

  uploadButtonValue: string;

  maxNumberOfFiles: number;
  acceptFileType: string[];

  $uploadClick: TAttachmentUploadResult;
  $attachmentItems: TAttachmentUploadResult;
}

export type TAttachmentUploadResult = (attachments: IAttachmentData[]) => void;

export interface IDragAndDropAddedResult {
  merged: IAttachmentData[];
  new: IAttachmentData[];
}
