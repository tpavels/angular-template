import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeature, createReducer, on } from "@ngrx/store";
import { GuestbookEntry } from "src/app/types/guestbook.model";
import { GuestbookAPIActions, GuestbookPageActions } from "./guestbook.actions";

export interface GuestbookState extends EntityState<GuestbookEntry> {
    loading: boolean;
    errorMessage: string;
}

const adapter: EntityAdapter<GuestbookEntry> = createEntityAdapter<GuestbookEntry>({});

const initialState: GuestbookState = adapter.getInitialState({
    loading: false,
    errorMessage: '',
});

const { selectAll } = adapter.getSelectors();

export const selectAllGuestbookEntries = selectAll;

export const guestbookFeature = createFeature({
    name: 'guestbook',
    reducer: createReducer(
        initialState,
        on(GuestbookPageActions.loadGuestbookEntries, (state) =>
            adapter.setAll([], {
                ...state,
                loading: true,
                errorMessage: '',
            })),
        on(GuestbookAPIActions.guestbookEntriesLoadedSuccess, (state, { entries }) =>
            adapter.setAll(entries, {
                ...state,
                loading: false,
            })),
        on(GuestbookAPIActions.guestbookEntriesLoadedFail, (state, { message }) =>
            adapter.setAll([], {
                ...state,
                errorMessage: message,
                loading: false,
            })),
        on(GuestbookAPIActions.guestbookEntryAddedSuccess, (state, { entry }) =>
            adapter.addOne(entry, {
                ...state,
                loading: false,
            })
        ),
        on(GuestbookAPIActions.guestbookEntryAddedFail, (state, { message }) => ({
            ...state,
            loading: false,
            errorMessage: message,
        })),
    ),
});