import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import BillNotFound from './BillNotFound';

describe("BillNotFound", () => {

    beforeEach(() => {
        render(
          <BrowserRouter>
            <BillNotFound />
          </BrowserRouter>
        );
    });

    test("should show title all the time", () => {
        expect(screen.getAllByText(/Cliente não encontrada/i)).toBeDefined()
    })
})